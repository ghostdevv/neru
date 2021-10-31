import { neru } from 'neru';

/**
 * @type {import('neru').Adapter<string>}
 */
const adapter = {
    name: 'testing-adapter',
};

neru({
    adapter,
    server: '',
    routes: 'dev/src/routes',
    debug: true,
});
