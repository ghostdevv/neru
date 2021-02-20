const generateRoutes = require('../Routes/generate.js');

module.exports = class Router {
    constructor(server) {
        this.server = server;

        this.use = server.use.bind(server);
    }

    async listen(port, cb) {
        this.routes = await generateRoutes();
        const routes = this.routes.values();

        for (const { route, path } of routes) {
            this.server.get(route, require(path));
        }

        return this.server.listen(port, cb);
    }
};
