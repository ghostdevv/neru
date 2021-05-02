import { clean } from '../../helpers/file.js';
import { pathToFileURL } from 'url';
import { parse } from 'path';

export default class File {
    constructor(path) {
        const { dir, base, ext, name } = parse(clean(path));

        this.path = clean(path);
        this.url = pathToFileURL(this.path).href;
        this.dir = clean(dir);
        this.base = clean(base);
        this.ext = clean(ext);
        this.name = clean(name);
    }
}
