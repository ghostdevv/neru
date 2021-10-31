import { createLogger } from '../utils/logger';
import { coloured } from '../utils/colour';
import { adapterSchema } from './adapter';
import type { Adapter } from './adapter';

export const createLayer = <AdapterType extends Adapter>(
    adapter: AdapterType,
) => {
    const logger = createLogger().createChild(
        coloured(`[ADAPTER: ${adapter.name || 'unknown'}]`, 35),
    );

    const { error } = adapterSchema.validate(adapter);

    if (error) {
        logger.error(error.annotate());

        throw new Error(
            'Invalid adapter, please contact the author with the above error',
        );
    }

    return {
        logger,
        adapter,
    };
};
