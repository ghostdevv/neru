import { adapter } from '@nerujs/express';
import express from 'express';
import { neru } from 'neru';

const server = express();

await neru({
    server,
    adapter,
    routes: 'src/routes',
});

server.listen(4000, () => {
    console.log('Online on http://localhost:4000');
});
