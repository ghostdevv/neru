import type { Adapter, GetMethodType } from './adapters/adapter';
import { validateAdapter } from './adapters/validate';
import { importMethods } from './methods/import';
import type { NeruOptions } from './options';
import { normalize, resolve } from 'path';
import { logger } from './logger';
import { readFiles } from './utils/fs';
import { Route } from './routes/Route';
import { blue } from 'kleur/colors';
import { existsSync } from 'fs';

export const neru = async <AdapterType extends Adapter>(
    options: NeruOptions<AdapterType>,
) => {
    const { routes, adapter, server } = options;

    if (!routes || !(typeof routes == 'string' || Array.isArray(routes)))
        throw new TypeError(
            'Please give a valid routes directory or array of directories',
        );

    // Set debug
    if (options.debug) process.env.NERU_DEBUG = '1';

    // Validate the adapter
    validateAdapter(adapter);

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
