import { createLayer } from '../adapters/layer';
import { createLogger } from '../utils/logger';
import { neruOptionsSchema } from './options';

import type { Adapter } from '../adapters/adapter';
import type { NeruParams } from './options';

export const neru = <AdapterType extends Adapter>({
    adapter,
    server,
    ...options
}: NeruParams<AdapterType>) => {
    const { error } = neruOptionsSchema.validate(options);
    const logger = createLogger(options.debug);
    const layer = createLayer(adapter, logger);

    if (error) {
        logger.error(error.annotate());
        throw new Error('Options invalid, check the error above');
    }
};
