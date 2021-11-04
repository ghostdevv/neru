import { createLayer } from '../adapters/layer';
import { createLogger } from '../utils/logger';
import { RouteFile } from './routes/RouteFile';
import { RouteDir } from './routes/RouteDir';
import { validateOptions } from './options';
import { coloured } from '../utils/colour';
import { flattenPaths } from 'ghoststools';
import { castToArray } from 'ghoststools';
import { Route } from './routes/Route';

import type { Adapter, MethodType } from '../adapters/adapter';
import type { RouteMethods } from './routes/Route';
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

        for (const file of flattenPaths(dir.path)) {
            const routeFile = new RouteFile(file, dir);

            const data: RouteMethods<MethodType<typeof layer.adapter>> =
                await import(routeFile.filePath);

            const route = new Route(routeFile, layer.adapter, data);

            logger.debug(`Found route ${coloured(route.route, 33)}`);

            // Add the route to the server
        }
    }
};
