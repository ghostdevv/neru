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
            .replace(/(\/)?index/g, '');

        this.path = path.normalize(fullname).replace(/\\/g, '/');
        this.route = route;
        this.directoryRoute = !!this.path.match(/(?:(index)(\.(\w)*)?)$/gm);
    }
};
