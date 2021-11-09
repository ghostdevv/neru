import type { RouteMethods } from './routeMethods';
import type { RouteFile } from './RouteFile';
import { Adapter } from '../..';

export class Route<AdapterType extends Adapter, MethodType> {
    /**
     * The route string
     */
    public readonly route: string;

    /**
     * The file this route belongs to
     */
    public readonly routeFile: RouteFile;

    /**
     * All methods exported from the file
     */
    public readonly methods: Partial<RouteMethods<MethodType>>;

    constructor(
        routeFile: RouteFile,
        adapter: AdapterType,
        methods: Partial<RouteMethods<MethodType>>,
    ) {
        this.routeFile = routeFile;
        this.route = Route.parseRoutePath(this.routeFile.routePath, adapter);

        this.methods = methods;
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
