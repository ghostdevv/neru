import { validateAdapter } from '../adapters/validate';
import { createLogger } from '../utils/logger';
import { RouteFile } from '../routes/RouteFile';
import { importRoutes } from '../methods/import';
import { RouteDir } from '../routes/RouteDir';
import { readFiles } from '../utils/fs';
import { Route } from '../routes/Route';
import { blue } from 'kleur/colors';

import type { Adapter, MethodType } from '../adapters/adapter';
import type { NeruParams } from './options';

export const neru = async <AdapterType extends Adapter>({
    adapter,
    server,
    routes,
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
        const dir = new RouteDir(rawDir);

        for (const file of readFiles(dir.path)) {
            const routeFile = new RouteFile(file, dir);

            // prettier-ignore
            const routeMethods = await importRoutes<MethodType<typeof adapter>>(routeFile.filePath, logger);
            const route = new Route(routeFile, adapter, routeMethods);

            logger.debug(`Found route ${blue(route.route)}`);

            adapter.addRoute(server, route, routeMethods);
        }
    }
};
