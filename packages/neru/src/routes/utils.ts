import { stripExt, stripTrailingSlash } from 'ghoststools';
import { Adapter } from '../adapters/adapter';

export const filePathToRoute = (path: string, routeDirectory: string) => {
    // Remove file extension
    path = stripExt(path);

    // Get rid of the route directory from the path
    path = path.replace(routeDirectory, '');

    // Remove the trailing slash
    path = stripTrailingSlash(path);

    // Resolve the index
    path = path.endsWith('/index') ? path.slice(0, -'/index'.length) : path;

    // Check path starts with a /
    path = path.startsWith('/') ? path : `/${path}`;

    return path;
};

export const formatRoutePath = <AdapterType extends Adapter>(
    route: string,
    adapter: AdapterType,
) =>
    route.replace(/\[(\.\.\.)?([^ ]+?)\]/gi, (param, isSpread, slug) => {
        if (!adapter.formatParamRoute)
            throw new Error(
                'The current adapter you are using does not support param routes.',
            );

        if (isSpread) {
            if (!adapter.formatSpreadRoute)
                throw new Error(
                    'The current adapter you are using does not support spread routes',
                );

            return adapter.formatSpreadRoute(slug);
        }

        return adapter.formatParamRoute(slug);
    });
