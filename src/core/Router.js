const resolveFiles = require('../helpers/resolveFiles.js');
const Route = require('./Route.js');

module.exports = class Router {
    constructor(server) {
        this.server = server;

        this.use = server.use.bind(server);
    }

    async generateRoutes() {
        const files = (await resolveFiles()).filter((x) => !x.isDirectory);
        const routes = new Map();

        for (const routeData of files) {
            const route = new Route(routeData);

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
        const routes = (await this.generateRoutes()).values();

        for (const { route, path } of routes) {
            this.server.get(route, require(path));
        }

        return this.server.listen(port, cb);
    }
};
