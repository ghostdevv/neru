import { route } from '../../src/index';

export const all = route({
    handler(request, reply) {
        return {
            message: 'Ok',
        };
    },
});
