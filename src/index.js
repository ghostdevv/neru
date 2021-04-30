import Router from './core/Router.js';
import { createConfig } from './helpers/config.js';

export function router(app, options = {}) {
    const config = createConfig(options);
    const router = new Router(app, config);

    return router;
}

export default {
    router,
};
