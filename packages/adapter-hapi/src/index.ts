import type { ServerRoute, Server } from '@hapi/hapi';
import type { Adapter } from 'neru';

type NeruHapiServerRoute = Omit<ServerRoute, 'path' | 'method'>;

export const adapter: Adapter<Server, NeruHapiServerRoute> = {
    name: 'hapi',

    formatParamRoute: (slug) => `{${slug}}`,
    formatSpreadRoute: (slug) => `{${slug}*}`,

    addHandler: ({ server, route, handler, method }) =>
        server.route({
            ...handler,
            method,
            path: route,
        }),
};

export const route = (route: NeruHapiServerRoute) => route;
