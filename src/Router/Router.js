const generateRoutes = require('../Routes/generate.js');

module.exports = class Router {
    constructor(server, options) {
        this.server = server;
        this.options = options;

        this.use = server.use.bind(server);
    }

    async listen(port, cb) {
        if (typeof Number(port) != 'number')
            throw new TypeError('Please give a valid port');

        this.routes = await generateRoutes({
            routesDir: this.options.routesDir,
        });

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
