import { normalize } from 'path';

export function clean(path) {
    return normalize(path).replace(/\\/g, '/');
}
