export default class Router {
    #server;
    #options;

    #routesLoaded = false;

    constructor(server, routes, options) {
        this.#server = server;
        this.#options = options;

        if (!(routes instanceof Map))
            throw new TypeError(`Expected a map for routes`);

        this.loadRoutes(routes);
    }

    async loadRoutes(routes) {
        if (this.#routesLoaded) throw new Error('Routes already loaded');
        this.#routesLoaded = true;

        for (const route of routes.values()) {
            try {
                const data = await import(route.fileUrl);
                if (!data || !data.default)
                    throw new Error(`Unable to load route: ${route.route}`);
            } catch (error) {}
        }
    }
}
