import Joi from 'joi';

// @todo add jsdoc

export interface Adapter<ServerType = unknown> {
    name: string;

    getParamRoute: (slug: string) => Promise<string> | string;
    getSpreadRoute: (slug: string) => Promise<string> | string;

    addRoute: (server: ServerType, route: string) => Promise<void> | void;
}

export const adapterSchema = Joi.object({
    name: Joi.string().required(),

    getParamRoute: Joi.function().required(),
    getSpreadRoute: Joi.function().required(),

    addRoute: Joi.function().required(),
});
