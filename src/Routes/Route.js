const path = require('path');

module.exports = class Route {
    constructor({ fullname }) {
        const sanitisedPath = path
            .normalize(fullname)
            .replace(/\\/g, '/')
            .replace(/(\.[^\n.]*)$/gm, '');

        const route = sanitisedPath
            .match(/(?=routes)([^\n])+/g)[0]
            .slice(6)
            .replace(/(\/)?index$/gm, '')
            .trim();

        this.path = path.normalize(fullname).replace(/\\/g, '/');
        this.route = route == '' ? '/' : route;
        this.directoryRoute = !!this.path.match(/(?:(index)(\.(\w)*)?)$/gm);

        this.methods = {};

        const module = require(this.path);
        if (typeof module != 'object')
            throw new Error(
                `[ROUTER] [FATAL] Recieved type ${typeof module} expected object`,
            );

        const methods = [
            'get',
            'head',
            'post',
            'put',
            'delete',
            'trace',
            'options',
            'connect',
            'patch',
        ];

        for (const [method, fn] of Object.entries(module)) {
            if (!methods.includes(method))
                throw new Error(
                    `Method ${method} not supported, must be a valid HTTP request method`,
                );

            if (typeof fn != 'function')
                throw new Error(`Recieved type ${typeof fn} expected function`);

            this.methods[method] = fn;
        }
    }
};
