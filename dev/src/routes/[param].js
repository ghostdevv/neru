import { route } from '@nerujs/fastify';

export const get = route({
    handler: (request, reply) => {
        return `Param: ${request.params.param}`;
    },
});
