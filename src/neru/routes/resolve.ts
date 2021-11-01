import { posixify, stripTrailingSlash, flattenPaths } from 'ghoststools';
import { normalize, resolve } from 'path';
import { RouteFile } from './RouteFile';
import { existsSync } from 'fs';

export const resolveRouteFiles = (routesDir: string): RouteFile[] => {
    const dir = stripTrailingSlash(posixify(resolve(normalize(routesDir))));

    if (!existsSync(dir))
        throw new Error(`Unable to find routes directory ${dir}`);

    return flattenPaths(dir).map((file) => new RouteFile(file, dir));
};
