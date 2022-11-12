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

export const adapter: Adapter<FastifyInstance, RouteOptions> = {
    name: 'fastify',

    formatParamRoute: (slug) => `:${slug}`,

    addHandler: ({ server, route, handler, method }) =>
        void server.route({
            ...handler,
            // @ts-ignore - fastify doesn't like the method string type currently
            method: method.toUpperCase(),
            url: route,
        }),

    addAllHandler: ({ server, route, handler }) =>
        void server.route({
            ...handler,
            url: route,
            method: methods,
        }),
};

export const route = (route: RouteOptions) => route;
