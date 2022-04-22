import { adapter } from '@nerujs/hapi';
import Hapi from '@hapi/hapi';
import { neru } from 'neru';

const server = Hapi.server({
    port: 4000,
    host: 'localhost',
});

await neru({
    adapter,
    server,
    routes: 'src/routes',
});

await server.start();
console.log(`Online on ${server.info.uri}`);
