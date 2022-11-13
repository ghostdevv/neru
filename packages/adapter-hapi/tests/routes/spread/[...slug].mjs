import { route } from '../../../src/index';

export const GET = route({
    handler(request, h) {
        return {
            message: request.params.slug,
        };
    },
});
