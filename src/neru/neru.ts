import { createLayer } from '../adapters/layer';
import { createLogger } from '../utils/logger';
import { validateOptions } from './options';

import type { Adapter } from '../adapters/adapter';
import type { NeruParams } from './options';

export const neru = <AdapterType extends Adapter>({
    adapter: inpAdapter,
    server,
    ...inpOptions
}: NeruParams<AdapterType>) => {
    const logger = createLogger(inpOptions.debug);

    const options = validateOptions(inpOptions, logger);
    const layer = createLayer(inpAdapter, logger);
};
