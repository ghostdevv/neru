import { coloured } from '../utils/colour';
import { adapterSchema } from './adapter';

import type { Consolite } from 'consolite';
import type { Adapter } from './adapter';

export const createLayer = <AdapterType extends Adapter>(
    adapter: AdapterType,
    baseLogger: Consolite & Console,
) => {
    const logger = baseLogger.createChild(
        coloured(`[ADAPTER: ${adapter.name || 'unknown'}]`, 35),
    );

    const { error } = adapterSchema.validate(adapter);

    if (error) {
        logger.error(error.annotate());

        throw new Error(
            'Invalid adapter, please contact the author with the above error',
        );
    }

    logger.debug(`Loaded adapter`);

    return {
        logger,
        adapter,
    };
};
