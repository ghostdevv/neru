import { createLogger as consolite } from 'consolite';
import { coloured } from './colour';

const prefixes: Record<string, string> = {
    debug: coloured('[DEBUG]', 36),
    error: coloured('[ERROR]', 31),
};

export const createLogger = (debug = false) => {
    const logger = consolite((method) => prefixes[method] || '');

    if (debug) logger.level = 4;

    return logger;
};
