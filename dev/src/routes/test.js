import { route } from '@nerujs/fastify';

export const get = route({
    handler: (req, h) => {
        return 'Hello World';
    },
});
