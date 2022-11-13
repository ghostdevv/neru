import { route } from '../../../src/index';

export const GET = route({
    handler(request, reply) {
        return {
            message: request.params.slug,
        };
    },
});
