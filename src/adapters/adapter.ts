import Joi from 'joi';

export interface Adapter<ServerType = unknown> {
    /**
     * The name of the adapter
     */
    name: string;

    /**
     * This function will be given a param and should return the framework specific implimentation of it
     */
    formatParamRoute: (slug: string) => string;

    /**
     * This function will be given a spread param and should return the framework specific implimentation of it
     * Not all frameworks support these but there are usually workarounds
     */
    formatSpreadRoute: (slug: string) => string;

    /**
     * This function should add the given route to the server
     */
    addRoute: (server: ServerType, route: string) => Promise<void> | void;
}

export const adapterSchema = Joi.object({
    name: Joi.string().required(),

    formatParamRoute: Joi.function().required(),
    formatSpreadRoute: Joi.function().required(),

    addRoute: Joi.function().required(),
});
