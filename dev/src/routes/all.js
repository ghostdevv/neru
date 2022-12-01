import { route } from '@nerujs/fastify';

export const ALL = route({
    handler: (request, reply) => {
        return 'Hello World';
    },
});
