module.exports = class App {
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

    connect(...wares) {
        this.#connect.push(wares);
    }

    delete(...wares) {
        this.#delete.push(wares);
    }

    get(...wares) {
        this.#get.push(wares);
    }

    head(...wares) {
        this.#head.push(wares);
    }

    options(...wares) {
        this.#options.push(wares);
    }

    patch(...wares) {
        this.#patch.push(wares);
    }

    post(...wares) {
        this.#post.push(wares);
    }

    put(...wares) {
        this.#put.push(wares);
    }

    trace(...wares) {
        this.#trace.push(wares);
    }
};
