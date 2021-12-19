import type { RouteMethods } from './methods.d';
import { stripTrailingSlash } from 'ghoststools';
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

        // Set initial route value
        this.route = this.routeFile.routePath;

        // Run route parser chain
        this.route = Route.resolveIndex(this.route);
        this.route = Route.formatRoutePath(this.route, adapter);
        this.route = stripTrailingSlash(this.route);

        this.methods = methods;
    }

    static resolveIndex(route: string) {
        return route.endsWith('/index')
            ? route.slice(0, -'index'.length)
            : route;
    }

    static formatRoutePath<AdapterType extends Adapter>(
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
