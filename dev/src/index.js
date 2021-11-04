import { neru } from 'neru';

/**
 * @type {import('neru').Adapter<string, number>}
 */
const adapter = {
    name: 'testing-adapter',

    formatParamRoute: (slug) => `{${slug}}`,
    formatSpreadRoute: (slug) => `{${slug}**}`,

    addRoute: (server, route) => console.log({ route }),
};

neru({
    adapter,
    server: '',
    routes: 'dev/src/routes',
    debug: true,
});
