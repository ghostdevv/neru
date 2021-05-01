import { clean } from '../../helpers/file.js';
import { relative } from 'path';

export default class RouteFile {
    constructor(file, routesDir) {
        this.filePath = file.path;
        this.fileUrl = file.url;
        this.routesDir = routesDir;

        this.route = RouteFile.cleanRoute(
            relative(routesDir, file.path).slice(0, -file.ext.length),
        );

        this.expressPath = RouteFile.parseExpressPath(this.route);
    }

    static cleanRoute(route) {
        route = clean(route);
        route = route == 'index' ? '/' : route;

        return route.startsWith('/') ? route : `/${route}`;
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
