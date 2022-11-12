import type { RouteHandler, FastifyInstance } from 'fastify';
import type { Adapter } from 'neru';

export const adapter: Adapter<FastifyInstance, RouteHandler> = {
    name: 'fastify',

    formatParamRoute: (slug) => `:${slug}`,

    addHandler: ({ server, route, handler, method }) =>
        void server.route({
            ...handler,
            // @ts-ignore - fastify doesn't like the method string type currently
            method: method.toUpperCase(),
            url: route,
        }),
};

export const route = (route: RouteHandler) => route;
