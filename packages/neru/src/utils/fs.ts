import { readdirRecursive, posixify } from 'ghoststools';
import { sep } from 'path';

export const readFiles = (files: string) =>
    readdirRecursive(files, { filter: (f) => !f.startsWith('_') });

export const normaliseSlashes = (path: string) =>
    sep == '\\' ? posixify(path) : path;
