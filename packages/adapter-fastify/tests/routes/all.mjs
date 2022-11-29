import { route } from '../../src/index';

export const ALL = route({
    handler(request, reply) {
        return {
            message: 'Ok',
        };
    },
});
