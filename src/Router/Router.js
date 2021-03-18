const resolveFiles = require('../helpers/resolveFiles.js');
const Route = require('../Routes/Route.js');
const np = require('path');

module.exports = class Router {
    #server;
    #options;
    #routes = new Map();
    #context = new Map();

    constructor(server, options) {
        this.#server = server;
        this.#options = options;

        this.use = this.#server.use.bind(server);
    }

    get options() {
        return this.#options;
    }

    get routes() {
        return this.#routes;
    }

    setContext(key, value) {
        if (typeof key != 'string')
            throw new TypeError(
                `Expected type string for key, recieved ${typeof key}`,
            );

        this.#context.set(key, value);
    }

    getContext(key) {
        if (typeof key != 'string')
            throw new TypeError(
                `Expected type string for key, recieved ${typeof key}`,
            );

        return this.#context.get(key);
    }

    async #generateRoutes({ routesDir }) {
        const routes = new Map();
        const files = await resolveFiles(routesDir);

        for (const { fullname } of files) {
            const path = np
                .normalize(fullname)
                .replace(/\\/g, '/')
                .replace(/(\.[^\n.]*)$/gm, '');

            const route = new Route(path, this);

            if (routes.has(route.route)) {
                console.log(
                    `[ROUTES] [WARN] You have a route conflict for the route ${route.route}, directory\'s take priority.`,
                );

                if (!route.directoryRoute) continue;
            }

            routes.set(route.route, route);
        }

        return routes;
    }

    async listen(port, cb) {
        if (isNaN(Number(port)))
            throw new TypeError('Please give a valid port');

        this.#routes = await this.#generateRoutes({
            routesDir: this.#options.routesDir,
        });

        const routes = this.routes.values();

        // Loop over all the routes collected
        for (const { route, methods } of routes) {
            // Loop over each type of method (get, post, etc)
            for (const [method, handlers] of Object.entries(methods)) {
                // Loop over each method handler (there may be multiple get handlers for example)
                for (const fns of handlers) {
                    // Bind the method to route with handlers
                    this.#server[method](route, ...fns);
                }
            }
        }

        return this.#server.listen(port, cb);
    }
};
