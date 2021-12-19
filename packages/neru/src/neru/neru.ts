import { createLayer } from '../adapters/layer';
import { createLogger } from '../utils/logger';
import { RouteFile } from './routes/RouteFile';
import { importRoutes } from './routes/import';
import { RouteDir } from './routes/RouteDir';
import { validateOptions } from './options';
import { coloured } from '../utils/colour';
import { castToArray } from 'ghoststools';
import { readFiles } from '../utils/fs';
import { Route } from './routes/Route';

import type { Adapter, MethodType } from '../adapters/adapter';
import type { RouteMethods } from './routes/methods.d';
import type { NeruParams } from './options';

export const neru = async <AdapterType extends Adapter>({
    adapter: inpAdapter,
    server,
    ...inpOptions
}: NeruParams<AdapterType>) => {
    const logger = createLogger(inpOptions.debug);

    const options = validateOptions(inpOptions, logger);
    const layer = createLayer(inpAdapter, logger);

    for (const rawDir of castToArray(options.routes)) {
        const dir = new RouteDir(rawDir);

        for (const file of readFiles(dir.path)) {
            const routeFile = new RouteFile(file, dir);

            const routeMethods = await importRoutes<
                MethodType<typeof layer.adapter>
            >(routeFile.filePath, logger);

            const route = new Route(routeFile, layer.adapter, routeMethods);

            logger.debug(`Found route ${coloured(route.route, 33)}`);

            layer.adapter.addRoute(server, route, routeMethods);
        }
    }
};
