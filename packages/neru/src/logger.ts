import { cyan, red, yellow, bold } from 'kleur/colors';
import { createLogger as consolite } from 'consolite';

const prefixes: Record<string, string> = {
    debug: bold(cyan('[DEBUG]')),
    error: bold(red('[ERROR]')),
    warn: bold(yellow('[WARN]')),
};

const createLogger = (debug = false) => {
    const logger = consolite((method) => prefixes[method] || '');

    if (debug) logger.level = 4;

    return logger;
};

export const logger = createLogger(!!process.env.NERU_DEBUG);
