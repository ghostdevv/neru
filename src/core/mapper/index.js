import readdir from 'recursive-readdir-sync';
import { resolve } from 'path';

import File from './File.js';
import RouteFile from './RouteFile.js';

export function createRoutesMap(dir) {
    const files = readdir(resolve(dir)).filter((x) => {
        const { name, ext } = parse(x);
        return !name.startsWith('_') && ['.js'].includes(ext);
    });

    const routes = new Map();

    for (const path of files) {
        const file = new File(path);
        const route = new RouteFile(file, dir);

        routes.set(route.route, route);
    }

    return routes;
}
