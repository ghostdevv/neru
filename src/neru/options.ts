import { adapterSchema } from '../adapters/adapter';
import type { Adapter } from '../adapters/adapter';
import Joi from 'joi';

export const neruOptionsSchema = Joi.object({
    routes: [Joi.string(), Joi.array().items(Joi.string())],
    debug: Joi.boolean(),
});

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
