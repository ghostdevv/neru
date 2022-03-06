import { validateAdapter } from '../adapters/validate';
import { importMethods } from '../methods/import';
import { createLogger } from '../utils/logger';
import { normalize, resolve } from 'path';
import { readFiles } from '../utils/fs';
import { Route } from '../routes/Route';
import { blue } from 'kleur/colors';

import type { Adapter, GetMethodType } from '../adapters/adapter';
import type { NeruParams } from './options';
import { existsSync } from 'fs';

export const neru = async <AdapterType extends Adapter>({
    adapter,
    server,
    routes = 'src/routes',
    options = {},
}: NeruParams<AdapterType>) => {
    if (!routes || !(typeof routes == 'string' || Array.isArray(routes)))
        throw new TypeError(
            'Please give a valid routes directory or array of directories',
        );

    const logger = createLogger(options.debug);

    // Validate the adapter
    validateAdapter(adapter, logger);

    const routeDirectoryArray = Array.isArray(routes) ? routes : [routes];

    for (const rawDir of routeDirectoryArray) {
        const dir = resolve(normalize(rawDir));

        if (!existsSync(dir))
            throw new Error(`Unable to find directory ${dir}`);

        for (const rawPath of readFiles(dir)) {
            const path = resolve(normalize(rawPath));

            // prettier-ignore
            const methods = await importMethods<GetMethodType<typeof adapter>>(path, logger);
            const route = new Route(path, dir, adapter, methods);

            logger.debug(`Found route ${blue(route.route)}`);

            adapter.addRoute(server, route, methods);
        }
    }
};
