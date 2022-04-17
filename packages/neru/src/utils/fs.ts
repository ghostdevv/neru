import { posixify } from 'ghoststools';
import { sep } from 'path';

export const normaliseSlashes = (path: string) =>
    sep == '\\' ? posixify(path) : path;
