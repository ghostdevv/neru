export default class Router {
    #server;
    #options;

    constructor(server, options) {
        this.#server = server;
        this.#options = options;
    }
}
