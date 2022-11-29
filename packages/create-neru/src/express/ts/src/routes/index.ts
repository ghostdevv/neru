import { route } from '@nerujs/express';

export const GET = route((req, res) => {
    res.send('Hello World');
});
