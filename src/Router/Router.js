const generateRoutes = require('../Routes/generate.js');

module.exports = class Router {
    constructor(server) {
        this.server = server;

        this.use = server.use.bind(server);
    }

    async listen(port, cb) {
        this.routes = await generateRoutes();
        const routes = this.routes.values();

        for (const { route, methods } of routes) {
            const { get } = methods;

            if (get) this.server.get(route, get);
        }

        return this.server.listen(port, cb);
    }
};
