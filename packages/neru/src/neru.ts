import type { Adapter, GetHandlerType } from './adapters/adapter';
import { importRouteHandlers } from './handlers/import';
import { validateAdapter } from './adapters/validate';
import { constructRoute } from './routes/routes';
import { blue, bold, gray } from 'kleur/colors';
import type { NeruOptions } from './options';
import { normalize, resolve } from 'path';
import { totalist } from 'totalist';
import { logger } from './logger';
import { existsSync } from 'fs';

export const neru = async <AdapterType extends Adapter>(
    options: NeruOptions<AdapterType>,
) => {
    // Set debug
    if (options.debug) {
        process.env.NERU_DEBUG = '1';
        logger.level = 4;
    }

    // Sets the default of routes to src/routes
    if (!options.routes)
        options.routes = 'src/routes';

    // Set the default of options.announce to true
    if (typeof options.announce != 'boolean')
        options.announce = true;

    // Check if routes are and valid
    if (!(typeof options.routes == 'string' || Array.isArray(options.routes)))
        throw new TypeError(
            'Please give a valid routes directory or array of directories',
        );

    // Check if adapter is given and valid
    if (!options.adapter || !validateAdapter(options.adapter))
        throw new TypeError('Please give a valid adapter');

    // Check if server exists
    if (!options.server) throw new Error('Please give a valid server');

    const { routes, adapter, server } = options;

    const routeDirectoryArray = Array.isArray(routes) ? routes : [routes];
    const toAnnounce: string[] = [];

    // Loop over all route directories
    for (const rawDir of routeDirectoryArray) {
        const directory = resolve(normalize(rawDir));

        if (!existsSync(directory))
            throw new Error(`Unable to find directory ${directory}`);

        // Use totalist to read all the files
        await totalist(rawDir, async (name, path) => {
            // Skip over certain files
            if (name.startsWith('_') || options.ignore?.test(name)) return;

            // Import the handlers
            const handlers = await importRouteHandlers<GetHandlerType<AdapterType>>(
                path,
            );

            // Construct the route
            const { route, neruRoute } = constructRoute({
                path,
                directory,
                adapter,
                base: options.base,
            });

            logger.debug(`Found route ${blue(neruRoute)} -> ${blue(route)}`);

            // Promises array for the add handler promises
            const addHandlerPromises = [];

            // Loop over all handlers and use adapter to add to server
            for (const [method, handler] of handlers.handlers) {
                addHandlerPromises.push(
                    adapter.addHandler({
                        method,
                        server,
                        handler,
                        route,
                    }),
                );

                // prettier-ignore
                toAnnounce.push(`${blue(method.toUpperCase())}${' '.repeat(12 - method.length)}${bold(neruRoute)}`);
            }

            // Wait for all handlers to be added
            await Promise.all(addHandlerPromises);

            // Check if handler has all method
            if (handlers.all) {
                // Exit if unsupported
                if (!adapter.addAllHandler)
                    throw new TypeError('Adapter does not support "all" handlers');

                // All all handler
                await adapter.addAllHandler({
                    handler: handlers.all,
                    server,
                    route,
                });
            }
        });
    }

    if (options.announce) {
        console.log();

        for (const line of toAnnounce)
            console.log(` ${gray(line)}`);

        console.log()
    }
};
