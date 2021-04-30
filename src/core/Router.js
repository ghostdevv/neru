export default class Router {
    #server;
    #routes;
    #options;

    constructor(server, routes, options) {
        this.#server = server;
        this.#routes = routes;
        this.#options = options;
    }
}
