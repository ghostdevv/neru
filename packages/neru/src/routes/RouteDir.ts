import { posixify, stripTrailingSlash } from 'ghoststools';
import { normalize, resolve, sep } from 'path';
import { existsSync } from 'fs';

const normaliseSlashes = (path: string) =>
    sep == '\\' ? posixify(path) : path;

export class RouteDir {
    public readonly path: string;

    constructor(rawPath: string, validate = true) {
        this.path = resolve(normalize(normaliseSlashes(rawPath)));

        if (!existsSync(this.path) && validate)
            throw new Error(`Unable to find routes directory ${this.path}`);
    }
}
