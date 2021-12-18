import { flattenPaths } from 'ghoststools';

export const readFiles = (files: string | string[]) =>
    flattenPaths(files, { filter: (f) => !f.startsWith('_') });
