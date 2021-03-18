const App = require('../App/App.js');

module.exports = class Route {
    #router;
    #methods;
    #path;
    #route;

    constructor(path, router) {
        this.#path = path;
        this.#router = router;
        this.#route = Route.resolveRoute(path);

        this.directoryRoute = !!this.#path.match(/(?:(index)(\.(\w)*)?)$/gm);

        const module = require(this.#path);
        if (!(module instanceof App))
            throw new Error(`Recieved type ${typeof module} expected App`);

        module.runtime(router);

        this.#methods = module.methods;
    }

    get methods() {
        return this.#methods;
    }

    get route() {
        return this.#route;
    }

    get path() {
        return this.#path;
    }

    static resolveRoute(path) {
        const route = path
            .match(/(?=routes)([^\n])+/g)[0]
            .slice(6)
            .replace(/(\/)?index$/gm, '')
            .trim();

        return route == '' ? '/' : route;
    }
};
