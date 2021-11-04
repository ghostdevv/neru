import { LowercaseMethod } from '../methods/methods';
import type { RouteFile } from './RouteFile';
import type { Adapter } from '../..';

export interface RouteMethods<MethodValue = unknown>
    extends Record<LowercaseMethod, MethodValue> {
    /**
     * This allows you to respond to any method
     */
    all: MethodValue;
}

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
