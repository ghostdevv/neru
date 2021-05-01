import HTTPMethods from '../helpers/methods.js';

export default class Route {
    #wares = [];
    #methods = {};

    constructor() {
        for (const method of HTTPMethods) {
            // Setup the array on methods object
            this.#methods[method] = [];

            // Setup the function on this class
            this[method] = (...wares) =>
                (this.#methods[method] = this.#updateMethod(method, wares));
        }
    }

    get methods() {
        return this.#methods;
    }

    #updateMethod(method, next) {
        const current = this.#methods[method];

        if (!next.every((x) => typeof x == 'function'))
            throw new TypeError('All middlewear provided should be a function');

        // Add all currently registerd middlewear
        next = [...this.#wares, ...next];

        // Update the current route method stack
        current.push(next);

        return current;
    }
}
