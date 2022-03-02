import { createLayer } from '../adapters/layer';
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
    adapter: inputAdapter,
    server,
    routes,
    options = {},
}: NeruParams<AdapterType>) => {
    const logger = createLogger(options.debug);
    const layer = createLayer(inputAdapter, logger);

    if (!routes || !(typeof routes == 'string' || Array.isArray(routes)))
        throw new TypeError(
            'Please give a valid routes directory or array of directories',
        );

    const routeDirectoryArray = Array.isArray(routes) ? routes : [routes];

    for (const rawDir of routeDirectoryArray) {
        const dir = new RouteDir(rawDir);

        for (const file of readFiles(dir.path)) {
            const routeFile = new RouteFile(file, dir);

            // prettier-ignore
            const routeMethods = await importRoutes<MethodType<typeof layer.adapter>>(routeFile.filePath, logger);
            const route = new Route(routeFile, layer.adapter, routeMethods);

            logger.debug(`Found route ${blue(route.route)}`);

            layer.adapter.addRoute(server, route, routeMethods);
        }
    }
};
