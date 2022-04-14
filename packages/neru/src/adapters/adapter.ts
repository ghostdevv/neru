import type { RouteMethods } from '../methods/methods.d';
import type { Route } from '../routes/Route';

export type GetHandlerType<AdapterType extends Adapter> =
    AdapterType extends Adapter<infer T, infer U> ? U : unknown;

export interface Adapter<ServerType = any, HandlerType = any> {
    /**
     * The name of the adapter
     */
    name: string;

    /**
     * This function should add the given route to the server
     */
    addRoute: (
        server: ServerType,
        route: Route<Adapter<ServerType, HandlerType>>,
        methods: Partial<RouteMethods<HandlerType>>,
    ) => Promise<void> | void;

    /**
     * This function will be given a param and should return the framework specific implimentation of it
     */
    formatParamRoute?: (slug: string) => string;

    /**
     * This function will be given a spread param and should return the framework specific implimentation of it
     * Not all frameworks support these but there are usually workarounds
     */
    formatSpreadRoute?: (slug: string) => string;
}
