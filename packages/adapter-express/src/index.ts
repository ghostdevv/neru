import type { Express, RequestHandler } from 'express';
import type { Adapter } from 'neru';

export const adapter: Adapter<Express, RequestHandler> = {
    name: 'express',

    formatParamRoute: (slug) => `:${slug}`,
    formatSpreadRoute: (slug) => `:${slug}([^]+)`,

    addHandler: ({ server, handler, method, route }) =>
        // @ts-ignore
        server[method](route.route, handler),
};

export const route = (route: RequestHandler) => route;
