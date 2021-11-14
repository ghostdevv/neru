import { posixify, stripTrailingSlash } from 'ghoststools';
import { normalize, resolve } from 'path';
import { existsSync } from 'fs';

export class RouteDir {
    public readonly path: string;

    constructor(rawPath: string, validate = true) {
        this.path = stripTrailingSlash(posixify(resolve(normalize(rawPath))));

        if (!existsSync(this.path) && validate)
            throw new Error(`Unable to find routes directory ${this.path}`);
    }
}
