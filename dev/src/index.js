import { adapter } from '@nerujs/hapi';
import Hapi from '@hapi/hapi';
import { neru } from 'neru';

const server = Hapi.server({
    host: 'localhost',
    port: 35309,
});

await neru({
    adapter,
    server,
    routes: 'src/routes',

    debug: true,
});

await server.start();

console.log(`Online on ${server.info.uri}`);
