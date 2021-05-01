import Route from './Route.js';

export default class Router {
    #server;
    #options;

    #routesLoaded = false;

    constructor(server, routes, options) {
        this.#server = server;
        this.#options = options;

        if (!(routes instanceof Map))
            throw new TypeError(`Expected a map for routes`);

        server.neru = this;

        this.loadRoutes(routes);
    }

    async loadRoute(route, router) {
        const methods = router.methods;

        // Loop over every method and the callers
        for (const [method, callers] of Object.entries(methods)) {
            // Loop over the callers and add them to the express server
            for (const fns of callers) {
                // Apply the route
                this.#server[method](route.expressPath, ...fns);
            }
        }
    }

    async loadRoutes(routes) {
        if (this.#routesLoaded) throw new Error('Routes already loaded');
        this.#routesLoaded = true;

        for (const route of routes.values()) {
            console.log(route);
            try {
                const data = await import(route.fileUrl);

                const router = data.default || data.router;
                if (!(router && router instanceof Route))
                    throw new Error(`No export of route found`);

                await this.loadRoute(route, router);
            } catch (error) {
                error.message = `Unable to load route "${route.route}": ${error.message}`;
                throw error;
            }
        }
    }
}
