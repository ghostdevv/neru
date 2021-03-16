const resolveFiles = require('../helpers/resolveFiles.js');
const Route = require('./Route.js');

module.exports = async ({ routesDir }) => {
    const files = (await resolveFiles(routesDir)).filter((x) => !x.isDirectory);
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
};
