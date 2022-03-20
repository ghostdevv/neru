import type { Express, RequestHandler } from 'express';
import type { Adapter } from 'neru';

// type NeruHapiServerRoute = Omit<ServerRoute, 'path' | 'method'>;

export const adapter: Adapter<Express, RequestHandler> = {
    name: 'express',

    formatParamRoute: (slug) => `:${slug}`,
    formatSpreadRoute: (slug) => `:${slug}([^]+)`,

    addRoute: (server, { route }, methods) => {
        const methodsArray: [string, RequestHandler | RequestHandler[]][] =
            Object.entries(methods);

        const add = (method: string, ...handlers: RequestHandler[]) =>
            // @ts-ignore
            server[method.toLowerCase()](route, ...handlers);

        for (const [method, data] of methodsArray)
            add(method, ...(Array.isArray(data) ? data : [data]));
    },
};

export const route = (route: RequestHandler) => route;
