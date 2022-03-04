import { stripExt, stripTrailingSlash } from 'ghoststools';
import { readdirRecursive, posixify } from 'ghoststools';
import { normalize, resolve, sep } from 'path';

export const readFiles = (files: string) =>
    readdirRecursive(files, { filter: (f) => !f.startsWith('_') });

export const normaliseSlashes = (path: string) =>
    sep == '\\' ? posixify(path) : path;

export const normaliseDirectory = (path: string) =>
    resolve(normalize(normaliseSlashes(path)));

export const filePathToRoute = (path: string, routeDirectory: string) => {
    // Remove file extension
    path = stripExt(path);

    // Get rid of the route directory from the path
    path = path.replace(routeDirectory, '');

    // Remove the trailing slash
    path = stripTrailingSlash(path);

    // Resolve the index
    path = path.endsWith('/index') ? path.slice(0, -'index'.length) : path;

    // Check path starts with a /
    path = path.startsWith('/') ? path : `/${path}`;

    return path;
};
