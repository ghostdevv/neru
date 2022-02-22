import type { ConsoliteLogger } from 'consolite';
import type { Adapter } from './adapter';
import { magenta } from 'kleur/colors';

export const createLayer = <AdapterType extends Adapter>(
    adapter: AdapterType,
    baseLogger: ConsoliteLogger,
) => {
    // An adapter must have a valid name, check this
    if (!adapter.name || typeof adapter.name != 'string')
        throw new TypeError('An adapter must have a string name');

    // All adapters have to have an addRoute function, check this
    if (!adapter.addRoute || typeof adapter.addRoute != 'function')
        throw new TypeError(
            'Adapter must have a function called addRoute. Please check the docs',
        );

    const logger = baseLogger.createChild(
        magenta(`[ADAPTER: ${adapter.name}]`),
    );

    // prettier-ignore
    if (adapter.formatParamRoute && typeof adapter.formatParamRoute != 'function')
        throw new TypeError(
            'Type of adapter.formatParamRoute must be a function',
        );

    // prettier-ignore
    if (adapter.formatSpreadRoute && typeof adapter.formatParamRoute != 'function')
        throw new TypeError(
            'Type of adapter.formatSpreadRoute must be a function',
        );

    logger.debug(`Loaded adapter`);

    if (!adapter.formatParamRoute)
        logger.warn('Adapter does not have a param route formatter');

    if (!adapter.formatSpreadRoute)
        logger.warn('Adapter does not have a spread route formatter');

    return {
        logger,
        adapter,
    };
};
