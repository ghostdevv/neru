const generateRoutes = require('../Routes/generate.js');

module.exports = class Router {
    constructor(server) {
        this.server = server;

        this.use = server.use.bind(server);
    }

    async listen(port, cb) {
        this.routes = await generateRoutes();
        const routes = this.routes.values();

        // Loop over all the routes collected
        for (const { route, methods } of routes) {
            // Loop over each type of method (get, post, etc)
            for (const [method, handlers] of Object.entries(methods)) {
                // Loop over each method handler (there may be multiple get handlers for example)
                for (const fns of handlers) {
                    // Bind the method to route with handlers
                    this.server[method](route, ...fns);
                }
            }
        }

        return this.server.listen(port, cb);
    }
};
