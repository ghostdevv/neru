import Router from './core/Router.js';
import Route from './core/Route.js';

import { createConfig } from './helpers/config.js';
import { createRoutesMap } from './core/mapper/index.js';

export function router(app, options = {}) {
    const config = createConfig(options);
    const routes = createRoutesMap(config.routesDir);

    if (app.neru && app.neru instanceof Router)
        throw new Error(
            'Unable to bind to your express app as neru is already detected on this app',
        );

    return new Router(app, routes, config);
}

export function route() {
    return new Route();
}

export default {
    router,
    route,
};
