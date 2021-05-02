import { clean } from '../../helpers/file.js';
import { relative } from 'path';

export default class RouteFile {
    constructor(file, routesDir) {
        this.filePath = file.path;
        this.fileUrl = file.url;
        this.routesDir = routesDir;

        this.route = RouteFile.resolveRoute(file, routesDir);
        this.expressPath = RouteFile.parseExpressPath(this.route);
    }

    static cleanRoute(route) {
        route = clean(route);
        return route.startsWith('/') ? route : `/${route}`;
    }

    static resolveRoute(file, routesDir) {
        const route = file.path
            .match(/(src\/routes\/)([^\n])+/gi)[0]
            .replace(new RegExp(routesDir, 'gim'), '')
            .slice(0, -file.ext.length);

        return route.endsWith('index') ? route.slice(0, -5) : route;
    }

    static parseExpressPath(route) {
        const matches = route.match(/\[([.\-_A-Za-z0-9])+\]/gi);
        if (!matches) return route;

        for (const match of matches) {
            const key = match.slice(1, -1);

            route = route.replace(
                match,
                ':' + (key.startsWith('...') ? `${key.slice(3)}([^]+)` : key),
            );
        }

        return route;
    }
}
