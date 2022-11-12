import { route } from '../../src/index';

export const get = route({
    handler(request, reply) {
        return {
            message: 'Ok',
        };
    },
});
