import type { Adapter, GetHandlerType } from './adapters/adapter';
import { validateAdapter } from './adapters/validate';
import { importHandlers } from './handlers/import';
import { LowercaseMethod } from '@nerujs/methods';
import { readDirRecursive } from './utils/fs';
import type { NeruOptions } from './options';
import { normalize, resolve } from 'path';
import { Route } from './routes/Route';
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

    for (const rawDir of routeDirectoryArray) {
        const dir = resolve(normalize(rawDir));

        if (!existsSync(dir)) throw new Error(`Unable to find directory ${dir}`);

        for (const path of readDirRecursive(dir, options.ignore)) {
            const handlers = await importHandlers<GetHandlerType<AdapterType>>(
                path,
            );

            const route = new Route({
                filePath: path,
                routesDirectory: dir,
                base: options.base,
                adapter,
                handlers,
            });

            logger.debug(`Found route ${blue(route.route)}`);

            // Loop over all handlers and use adapter to add to server
            for (const [method, handler] of Object.entries(handlers))
                adapter.addHandler({
                    method: method as LowercaseMethod,
                    server,
                    handler,
                    route,
                });
        }
    }
};
