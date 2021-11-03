import type { RouteFile } from './RouteFile';
import type { Adapter } from '../..';

export class Route<AdapterType extends Adapter> {
    public readonly route: string;
    public readonly routeFile: RouteFile;

    constructor(routeFile: RouteFile, adapter: AdapterType) {
        this.routeFile = routeFile;
        this.route = Route.parseRoutePath(this.routeFile.routePath, adapter);
    }

    static parseRoutePath<AdapterType extends Adapter>(
        route: string,
        adapter: AdapterType,
    ) {
        return route.replace(
            /\[(\.\.\.)?([^ ]+?)\]/gi,
            (param, isSpread, slug) =>
                isSpread
                    ? adapter.formatSpreadRoute(slug)
                    : adapter.formatParamRoute(slug),
        );
    }
}
