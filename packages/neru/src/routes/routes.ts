import { filePathToRoute, formatRoutePath, formatRoutePathSegment } from './utils';
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

    route = filePathToRoute(path, directory);
    route = formatRoutePath(route, adapter);

    if (options.base) {
        route = formatRoutePathSegment(options.base) + route;
    }

    return route;
};
