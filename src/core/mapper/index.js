import readdir from 'recursive-readdir-sync';
import { normalize, resolve } from 'path';

import File from './structures/File.js';
import Route from './structures/Route.js';

export function createRoutesMap(dir) {
    const files = readdir(resolve(dir));
    const routes = new Map();

    for (const path of files) {
        const file = new File(path);
        const route = new Route(file, dir);

        routes.set(route.route, route);
    }

    return routes;
}

export function clean(path) {
    return normalize(path).replace(/\\/g, '/');
}
