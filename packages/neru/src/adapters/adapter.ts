import { Method } from '@nerujs/methods';

export type GetHandlerType<AdapterType extends Adapter> =
    AdapterType extends Adapter<infer T, infer U> ? U : unknown;

export interface AdapterAddHandlerData<ServerType, HandlerType> {
    server: ServerType;
    method: Method;
    handler: HandlerType;
    route: string;
}

export interface AdapterAddAllHandlerData<ServerType, HandlerType> {
    server: ServerType;
    handler: HandlerType;
    route: string;
}

export interface Adapter<ServerType = any, HandlerType = any> {
    /**
     * The name of the adapter
     */
    name: string;

    /**
     * Can you have an ALL handler and other handlers in the same file
     * For Example: some frameworks will error if a route has an ALL and a GET handler
     */
    restrictAllHandler: boolean;

    /**
     * This function should add the given handler to the server by it's route and method
     */
    addHandler: (
        data: AdapterAddHandlerData<ServerType, HandlerType>,
    ) => Promise<void> | void;

    /**
     * This function should add a ALL handler, if your framework supports it
     * Some frameworks don't support it natively but it can still be achieved
     */
    addAllHandler?: (
        data: AdapterAddAllHandlerData<ServerType, HandlerType>,
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
