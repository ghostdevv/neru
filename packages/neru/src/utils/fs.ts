import { readdirRecursive as _readdirRecursive, posixify } from 'ghoststools';
import { sep } from 'path';

export const readDirRecursive = (files: string, ignoreRegex?: RegExp) =>
    _readdirRecursive(files, {
        filter: (f) => f.startsWith('_') || !ignoreRegex?.test(f),
    });

export const normaliseSlashes = (path: string) =>
    sep == '\\' ? posixify(path) : path;
