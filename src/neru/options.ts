import type { Adapter } from '../adapters/adapter';
import type { ConsoliteLogger } from 'consolite';
import Joi from 'joi';

export const neruOptionsSchema = Joi.object({
    routes: [Joi.string(), Joi.array().items(Joi.string())],
    debug: Joi.boolean(),
});

export const validateOptions = (
    options: NeruOptions,
    logger: ConsoliteLogger,
): NeruOptions => {
    const { error, value } = neruOptionsSchema.validate(options);

    if (error) {
        logger.error(error.annotate());
        throw new Error('Options invalid, check the error above');
    }

    return value;
};

export interface NeruParams<AdapterType extends Adapter> extends NeruOptions {
    /**
     * The adapter that works with your server choice!
     */
    adapter: AdapterType;

    /**
     * Your server
     */
    server: AdapterType extends Adapter<infer T> ? T : unknown;
}

export interface NeruOptions {
    /**
     * The route files neru should read
     */
    routes?: string | string[];

    /**
     * Enable debug messages
     */
    debug?: boolean;
}
