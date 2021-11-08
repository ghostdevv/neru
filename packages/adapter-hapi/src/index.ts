import type { ServerRoute, Server } from '@hapi/hapi';
import type { Adapter } from 'neru';

export const adapter: Adapter<Server, ServerRoute> = {
    name: 'hapi',

    formatParamRoute: (slug) => `{${slug}}`,
    formatSpreadRoute: (slug) => `{${slug}*}`,

    addRoute: (server, route, methods) => {
        const methodsArray: [string, ServerRoute][] = Object.entries(methods);

        for (const [method, data] of methodsArray) {
            if (typeof data != 'object')
                throw new TypeError(
                    `Expected route data for route "${route.route}" with method "${method}" - try the route fn`,
                );

            server.route({
                ...data,
                method,
                path: route.route,
            });
        }
    },
};

export const route = (route: ServerRoute) => route;
