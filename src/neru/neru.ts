import { validateAdapter } from '../adapters/adapter';
import type { Adapter } from '../adapters/adapter';
import { createLogger } from '../utils/logger';
import type { NeruOptions } from './options';
import { coloured } from '../utils/colour';

export const neru = <AdapterType extends Adapter>({
    adapter,
    server,
    ...options
}: NeruOptions<AdapterType>) => {
    const logger = createLogger(options.debug);

    const adapterLogger = logger.createChild(
        coloured(`[ADAPTER: ${adapter.name || 'unknown'}]`, 35),
    );

    const { error } = validateAdapter(adapter);

    if (error) {
        adapterLogger.error(error.annotate());

        throw new Error(
            'Invalid adapter, please contact the author with the above error',
        );
    }
};
