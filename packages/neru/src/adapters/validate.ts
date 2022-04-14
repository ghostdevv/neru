import { logger as baseLogger } from '../logger';
import type { Adapter } from './adapter';
import { magenta } from 'kleur/colors';

export const validateAdapter = <AdapterType extends Adapter>(
    adapter: AdapterType,
) => {
    // An adapter must have a valid name
    if (!adapter.name || typeof adapter.name != 'string')
        throw new TypeError('An adapter must have a string name');

    // All adapters have to have an addHandler function
    if (!adapter.addHandler || typeof adapter.addHandler != 'function')
        throw new TypeError(
            'Adapter must have a function called addHandler. Please check the docs',
        );

    const logger = baseLogger.createChild(magenta(`[ADAPTER: ${adapter.name}]`));

    // prettier-ignore
    if (adapter.formatParamRoute && typeof adapter.formatParamRoute != 'function')
        throw new TypeError(
            'Type of adapter.formatParamRoute must be a function',
        );

    // prettier-ignore
    if (adapter.formatSpreadRoute && typeof adapter.formatSpreadRoute != 'function')
        throw new TypeError(
            'Type of adapter.formatSpreadRoute must be a function',
        );

    logger.debug(`Loaded adapter`);

    if (!adapter.formatParamRoute)
        logger.debug('WARN: Adapter does not have a param route formatter');

    if (!adapter.formatSpreadRoute)
        logger.debug('WARN: Adapter does not have a spread route formatter');

    return true;
};
