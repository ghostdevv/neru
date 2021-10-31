import { neru } from 'neru';

/**
 * @type {import('neru').Adapter<string>}
 */
const adapter = {
    name: 'testing-adapter',

    getParamRoute: (slug) => `{${slug}}`,
    getSpreadRoute: (slug) => `{${slug}**}`,

    addRoute: (server, route) => console.log({ route }),
};

neru({
    adapter,
    server: '',
    routes: 'dev/src/routes',
    debug: true,
});
