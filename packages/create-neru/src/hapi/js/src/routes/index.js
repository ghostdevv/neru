import { route } from '@nerujs/hapi';

export const GET = route({
    handler() {
        return 'Hello world!';
    },
});
