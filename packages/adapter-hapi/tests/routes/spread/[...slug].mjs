import { route } from '../../../src/index';

export const get = route({
    handler(request, h) {
        return {
            message: request.params.slug,
        };
    },
});
