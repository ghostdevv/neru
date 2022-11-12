import { route } from '@nerujs/fastify';

export const get = route({
    handler: (request, reply) => {
        return `Param: ${req.params.param}`;
    },
});
