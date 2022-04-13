import type { Adapter, GetMethodType } from './adapters/adapter';
import { validateAdapter } from './adapters/validate';
import { importMethods } from './methods/import';
import type { NeruOptions } from './options';
import { normalize, resolve } from 'path';
import { readFiles } from './utils/fs';
import { Route } from './routes/Route';
import { blue } from 'kleur/colors';
import { logger } from './logger';
import { existsSync } from 'fs';

export const neru = async <AdapterType extends Adapter>(
    options: NeruOptions<AdapterType>,
) => {
    const { routes, adapter, server } = options;

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

    // Set debug
    if (options.debug) {
        process.env.NERU_DEBUG = '1';
    }

    const routeDirectoryArray = Array.isArray(routes) ? routes : [routes];

    for (const rawDir of routeDirectoryArray) {
        const dir = resolve(normalize(rawDir));

        if (!existsSync(dir))
            throw new Error(`Unable to find directory ${dir}`);

        for (const rawPath of readFiles(dir, options.ignore)) {
            const path = resolve(normalize(rawPath));

            // prettier-ignore
            const methods = await importMethods<GetMethodType<AdapterType>>(path);
            const route = new Route(path, dir, adapter, methods);

            logger.debug(`Found route ${blue(route.route)}`);

            adapter.addRoute(server, route, methods);
        }
    }
};
