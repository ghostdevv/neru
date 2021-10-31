import { createLayer } from '../adapters/layer';
import { createLogger } from '../utils/logger';
import { neruOptionsSchema } from './options';

import type { Adapter } from '../adapters/adapter';
import type { NeruParams } from './options';

export const neru = <AdapterType extends Adapter>({
    adapter: inpAdapter,
    server,
    ...inpOptions
}: NeruParams<AdapterType>) => {
    const { error, value: options } = neruOptionsSchema.validate(inpOptions);
    const logger = createLogger(options.debug);
    const layer = createLayer(inpAdapter, logger);

    if (error) {
        logger.error(error.annotate());
        throw new Error('Options invalid, check the error above');
    }
};
