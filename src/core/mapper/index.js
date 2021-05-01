import readdir from 'recursive-readdir-sync';
import { resolve } from 'path';

import File from './File.js';
import RouteFile from './RouteFile.js';

export function createRoutesMap(dir) {
    const files = readdir(resolve(dir));
    const routes = new Map();

    for (const path of files) {
        const file = new File(path);
        const route = new RouteFile(file, dir);

        routes.set(route.route, route);
    }

    return routes;
}
