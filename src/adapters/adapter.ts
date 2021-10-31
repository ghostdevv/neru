import Joi from 'joi';

export interface Adapter<ServerType = unknown> {
    name: string;

    addRoute?: (server: ServerType) => Promise<void> | void;
    addSlugRoute?: (server: ServerType) => Promise<void> | void;
    addSpreadRoute?: (server: ServerType) => Promise<void> | void;
}

export const adapterSchema = Joi.object({
    name: Joi.string().required(),

    addRoute: Joi.function(),
    addSlugRoute: Joi.function(),
    addSpreadRoute: Joi.function(),
});

export const validateAdapter = <AdapterType>(adapter: AdapterType) => {
    return adapterSchema.validate(adapter);
};
