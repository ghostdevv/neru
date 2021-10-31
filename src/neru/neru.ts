import { resolveRoutes } from './routes/resolve';
import { createLayer } from '../adapters/layer';
import { createLogger } from '../utils/logger';
import { validateOptions } from './options';
import { castToArray } from 'ghoststools';

import type { NeruOptions, NeruParams } from './options';
import type { Adapter } from '../adapters/adapter';

export const neru = <AdapterType extends Adapter>({
    adapter: inpAdapter,
    server,
    ...inpOptions
}: NeruParams<AdapterType>) => {
    const logger = createLogger(inpOptions.debug);

    const options = validateOptions(inpOptions as NeruOptions, logger);
    const layer = createLayer(inpAdapter, logger);

    const routes = [];

    for (const routesDir of castToArray<string>(options.routes))
        routes.push(...resolveRoutes(routesDir));

    console.log(routes);
};
