import type { RouteOptions, FastifyInstance, HTTPMethods } from 'fastify';
import type { Adapter } from 'neru';

const methods: HTTPMethods[] = [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
    'OPTIONS',
];

export type NeruFastifyRoute = Omit<RouteOptions, 'url' | 'method'>;

export const adapter: Adapter<FastifyInstance, NeruFastifyRoute> = {
    name: 'fastify',

    restrictAllHandler: true,

    formatParamRoute: (slug) => `:${slug}`,

    addHandler: ({ server, route, handler, method }) =>
        void server.route({
            ...handler,
            url: route,
            // @ts-ignore - fastify doesn't like the method string type currently
            method,
        }),

    addAllHandler: ({ server, route, handler }) =>
        void server.route({
            ...handler,
            url: route,
            method: methods,
        }),
};

export const route = (route: NeruFastifyRoute) => route;
