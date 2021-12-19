import type { RouteMethods } from '../neru/routes/methods.d';
import type { Route } from '../neru/routes/Route';
import Joi from 'joi';

export type MethodType<AdapterType extends Adapter> =
    AdapterType extends Adapter<infer T, infer U> ? U : unknown;

export interface Adapter<ServerType = any, MethodType = any> {
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
    addRoute: (
        server: ServerType,
        route: Route<Adapter<ServerType, MethodType>, MethodType>,
        methods: Partial<RouteMethods<MethodType>>,
    ) => Promise<void> | void;
}

export const adapterSchema = Joi.object({
    name: Joi.string().required(),

    formatParamRoute: Joi.function().required(),
    formatSpreadRoute: Joi.function().required(),

    addRoute: Joi.function().required(),
});
