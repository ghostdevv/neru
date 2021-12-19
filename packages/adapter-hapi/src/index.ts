import type { ServerRoute, Server } from '@hapi/hapi';
import type { Adapter } from 'neru';

type NeruHapiServerRoute = Omit<ServerRoute, 'path' | 'method'>;

export const adapter: Adapter<Server, ServerRoute> = {
    name: 'hapi',

    formatParamRoute: (slug) => `{${slug}}`,
    formatSpreadRoute: (slug) => `{${slug}*}`,

    addRoute: (server, { route }, methods) => {
        const methodsArray: [
            string,
            NeruHapiServerRoute | NeruHapiServerRoute[],
        ][] = Object.entries(methods);

        const add = (method: string, data: NeruHapiServerRoute) =>
            server.route({
                ...data,
                method,
                path: route,
            });

        for (const [method, data] of methodsArray)
            Array.isArray(data)
                ? data.forEach((x) => add(method, x))
                : add(method, data);
    },
};

export const route = (route: NeruHapiServerRoute) => route;
