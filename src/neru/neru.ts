import { resolveRouteFiles } from './routes/resolve';
import { createLayer } from '../adapters/layer';
import { createLogger } from '../utils/logger';
import { validateOptions } from './options';
import { coloured } from '../utils/colour';
import { castToArray } from 'ghoststools';

import type { NeruOptions, NeruParams } from './options';
import type { Adapter } from '../adapters/adapter';

export const neru = <AdapterType extends Adapter>({
    adapter: inpAdapter,
    server,
    ...inpOptions
}: NeruParams<AdapterType>) => {
    const logger = createLogger(inpOptions.debug);

    const options = validateOptions(inpOptions, logger);
    const layer = createLayer(inpAdapter, logger);

    const routes = [];

    for (const routesDir of castToArray<string>(options.routes))
        routes.push(...resolveRouteFiles(routesDir));

    if (options.debug)
        routes.forEach((r) =>
            logger.debug(`Found route ${coloured(r.route, 33)}`),
        );
};
