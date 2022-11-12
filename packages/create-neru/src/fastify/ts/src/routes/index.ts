import { route } from '@nerujs/fastify';

export const get = route({
    handler(request, reply) {
        return 'Hello world!';
    },
});
