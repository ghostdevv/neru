import { clean } from '../../helpers/file.js';
import { parse } from 'path';

export default class File {
    constructor(path) {
        const { dir, base, ext, name } = parse(path);

        this.path = clean(path);
        this.dir = clean(dir);
        this.base = clean(base);
        this.ext = clean(ext);
        this.name = clean(name);
    }
}
