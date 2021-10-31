import { posixify, stripTrailingSlash, flattenPaths } from 'ghoststools';
import { normalize, resolve } from 'path';
import { existsSync } from 'fs';

export const resolveRoutes = (routesDir: string): string[] => {
    const dir = stripTrailingSlash(posixify(resolve(normalize(routesDir))));

    if (!existsSync(dir))
        throw new Error(`Unable to find routes directory ${dir}`);

    // @todo remove ext
    return flattenPaths(dir).map((file) => file.replace(dir, ''));
};
