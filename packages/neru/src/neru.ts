import type { Adapter, GetHandlerType } from './adapters/adapter';
import { importRouteHandlers } from './handlers/import';
import { validateAdapter } from './adapters/validate';
import { constructRoute } from './routes/routes';
import { readDirRecursive } from './utils/fs';
import type { NeruOptions } from './options';
import { normalize, resolve } from 'path';
import { blue } from 'kleur/colors';
import { logger } from './logger';
import { existsSync } from 'fs';

export const neru = async <AdapterType extends Adapter>(
    options: NeruOptions<AdapterType>,
) => {
    const { routes, adapter, server } = options;

    // Set debug
    if (options.debug) {
        process.env.NERU_DEBUG = '1';
        logger.level = 4;
    }

    // Check if routes are given and valid
    if (!routes || !(typeof routes == 'string' || Array.isArray(routes)))
        throw new TypeError(
            'Please give a valid routes directory or array of directories',
        );

    // Check if adapter is given and valid
    if (!adapter || !validateAdapter(adapter))
        throw new TypeError('Please give a valid adapter');

    // Check if server exists
    if (!server) throw new Error('Please give a valid server');

    const routeDirectoryArray = Array.isArray(routes) ? routes : [routes];

    // Loop over all route directories
    for (const rawDir of routeDirectoryArray) {
        const directory = resolve(normalize(rawDir));

        if (!existsSync(directory))
            throw new Error(`Unable to find directory ${directory}`);

        // Loop over all the files in the directory
        for (const path of readDirRecursive(directory, options.ignore)) {
            // Import the handlers
            const handlers = await importRouteHandlers<GetHandlerType<AdapterType>>(
                path,
            );

            // Construct the route
            const route = constructRoute({
                path,
                directory,
                adapter,
                base: options.base,
            });

            logger.debug(`Found route ${blue(route)}`);

            // Loop over all handlers and use adapter to add to server
            for (const [method, handler] of handlers)
                adapter.addHandler({
                    method,
                    server,
                    handler,
                    route,
                });
        }
    }
};
