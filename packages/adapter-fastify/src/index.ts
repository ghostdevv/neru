import type { RouteHandler, FastifyInstance } from 'fastify';
import type { Adapter } from 'neru';

export const adapter: Adapter<FastifyInstance, RouteHandler> = {
    name: 'hapi',

    formatParamRoute: (slug) => `:${slug}`,

    // WIP
    formatSpreadRoute: (slug) => `{${slug}*}`,

    addHandler: ({ server, route, handler, method }) =>
        void server.route({
            // @ts-ignore - fastify doesn't like the method string type currently
            method,
            handler,
            url: route,
        }),
};

export const route = (route: RouteHandler) => route;
