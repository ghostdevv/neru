import { filePathToRoute, formatRoutePath, formatRoutePathSegment } from './utils';
import { stripTrailingSlash } from 'ghoststools';
import { Adapter } from '../adapters/adapter';

export interface RouteConstructionData {
    path: string;
    directory: string;
    adapter: Adapter;

    base?: string;
}

export const constructRoute = (data: RouteConstructionData) => {
    const { path, directory, adapter, ...options } = data;

    let route: string;
    let neruRoute: string;

    route = filePathToRoute(path, directory);
    neruRoute = route;

    route = formatRoutePath(route, adapter);

    if (options.base) {
        route = formatRoutePathSegment(options.base) + route;
        route = stripTrailingSlash(route);

        neruRoute = formatRoutePathSegment(options.base) + route;
        neruRoute = stripTrailingSlash(route);
    }

    return { route, neruRoute };
};
