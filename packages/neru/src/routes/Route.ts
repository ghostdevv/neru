import { filePathToRoute, formatRoutePath, formatRoutePathSegment } from './utils';
import type { RouteMethods } from '../methods/methods.d';
import { Adapter } from '../adapters/adapter';

export interface RouteParams<AdapterType extends Adapter, MethodType> {
    filePath: string;
    routesDirectory: string;

    base: string;

    adapter: AdapterType;
    methods: Partial<RouteMethods<MethodType>>;
}

export class Route<AdapterType extends Adapter, MethodType> {
    /**
     * The route string
     */
    public readonly route: string;

    constructor(
        /**
         * The file this route belongs to
         */
        public readonly filePath: string,

        /**
         * The base path for the route
         */
        public readonly base: string,

        /**
         * The directory this route was found in
         */
        public readonly routesDirectory: string,

        /**
         * The adapter the route is using
         */
        public readonly adapter: AdapterType,

        /**
         * All methods exported from the file
         */
        public readonly methods: Partial<RouteMethods<MethodType>>,
    ) {
        // Resolve the route
        this.route = filePathToRoute(filePath, routesDirectory);
        this.route = formatRoutePath(this.route, adapter);
        this.route = formatRoutePathSegment(base) + this.route;
    }
}
