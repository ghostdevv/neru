import { readdirRecursive } from 'ghoststools';

export const readFiles = (files: string) =>
    readdirRecursive(files, { filter: (f) => !f.startsWith('_') });
