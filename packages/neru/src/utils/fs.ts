import { readdirRecursive, posixify } from 'ghoststools';
import { sep } from 'path';

export const readFiles = (files: string, ignoreRegex?: RegExp) =>
    readdirRecursive(files, {
        filter: (f) => f.startsWith('_') || !ignoreRegex?.test(f),
    });

export const normaliseSlashes = (path: string) =>
    sep == '\\' ? posixify(path) : path;
