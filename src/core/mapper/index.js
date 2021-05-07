import readdir from 'recursive-readdir-sync';
import { resolve, parse } from 'path';

import File from './File.js';
import RouteFile from './RouteFile.js';

export function createRoutesMap({ routesDir, extensions }) {
    const files = readdir(resolve(routesDir)).filter((x) => {
        const { name, ext } = parse(x);
        return !name.startsWith('_') && extensions.includes(ext);
    });

    const routes = new Map();

    for (const path of files) {
        const file = new File(path);
        const route = new RouteFile(file, dir);

        routes.set(route.route, route);
    }

    return routes;
}
