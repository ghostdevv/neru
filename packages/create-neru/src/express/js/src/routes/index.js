import { route } from '@nerujs/express';

export const get = route((req, res) => {
    res.send('Hello World');
});
