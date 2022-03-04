import { readdirRecursive, posixify } from 'ghoststools';
import { normalize, resolve, sep } from 'path';

export const readFiles = (files: string) =>
    readdirRecursive(files, { filter: (f) => !f.startsWith('_') });

export const normaliseSlashes = (path: string) =>
    sep == '\\' ? posixify(path) : path;

// TODO am I running normaliseSlashes in right place
export const normaliseDirectory = (path: string) =>
    resolve(normalize(normaliseSlashes(path)));
