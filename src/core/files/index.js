import readdirp from 'readdirp';
import { resolve } from 'path';

export function createRoutesMap(dir) {
    dir = resolve(dir);
    console.log(dir);
}
