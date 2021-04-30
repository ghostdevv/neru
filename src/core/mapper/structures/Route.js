import { clean } from '../index.js';
import { relative } from 'path';

export default class Route {
    constructor(file, routesDir) {
        this.filePath = file.path;
        this.routesDir = routesDir;

        this.route = Route.cleanRoute(
            relative(routesDir, file.path).slice(0, -file.ext.length),
        );

        this.expressPath = Route.parseExpressPath(this.route);
    }

    static cleanRoute(route) {
        route = clean(route);
        return route.startsWith('/') ? route : `/${route}`;
    }

    static parseExpressPath(route) {
        const matches = route.match(/\[(\w|\d)+\]/gi);

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
