import { adapter } from '@nerujs/fastify';
import fastify from 'fastify';
import { neru } from 'neru';

const server = fastify({
    logger: true,
});

await neru({
    adapter,
    server,

    debug: true,
});

server.listen({ port: 3000 }, (error, address) => {
    console.log('Online', { error, address });
});
