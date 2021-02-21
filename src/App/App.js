module.exports = class App {
    #wares = [];

    // HTTP Methods
    #connect = [];
    #delete = [];
    #get = [];
    #head = [];
    #options = [];
    #patch = [];
    #post = [];
    #put = [];
    #trace = [];

    constructor() {}

    get methods() {
        return {
            connect: this.#connect,
            delete: this.#delete,
            get: this.#get,
            head: this.#head,
            options: this.#options,
            patch: this.#patch,
            post: this.#post,
            put: this.#put,
            trace: this.#trace,
        };
    }

    use(ware) {
        this.#wares.push(ware);
    }

    // Used to validate middlewear and merge middlewear added with app.use
    updateMethod(current, next) {
        if (!(Array.isArray(current) || Array.isArray(next)))
            throw new TypeError('updateMethod expects two arrays');

        if (!next.every((x) => typeof x == 'function'))
            throw new TypeError('All middlewear provided should be a function');

        // Add all currently registerd middlewear
        next = [...this.#wares, ...next];

        // Update the current route method stack
        current.push(next);

        return current;
    }

    // HTTP Methods

    connect(...wares) {
        this.#connect = this.updateMethod(this.#connect, wares);
    }

    delete(...wares) {
        this.#delete = this.updateMethod(this.#get, wares);
    }

    get(...wares) {
        this.#get = this.updateMethod(this.#get, wares);
    }

    head(...wares) {
        this.#head = this.updateMethod(this.#head, wares);
    }

    options(...wares) {
        this.#options = this.updateMethod(this.#options, wares);
    }

    patch(...wares) {
        this.#patch = this.updateMethod(this.#patch, wares);
    }

    post(...wares) {
        this.#post = this.updateMethod(this.#post, wares);
    }

    put(...wares) {
        this.#put = this.updateMethod(this.#put, wares);
    }

    trace(...wares) {
        this.#trace = this.updateMethod(this.#trace, wares);
    }
};
