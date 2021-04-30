import Router from './core/Router.js';
import { createConfig } from './helpers/config.js';
import { createRoutesMap } from './core/files/index.js';

export function router(app, options = {}) {
    const config = createConfig(options);
    const routes = createRoutesMap(config.routesDir);

    return new Router(app, routes, config);
}

export default {
    router,
};
