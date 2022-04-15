import { filePathToRoute, formatRoutePath, formatRoutePathSegment } from './utils';
import { Adapter, GetHandlerType } from '../adapters/adapter';
import type { RouteHandlers } from '../handlers/handlers';

export interface RouteParams<AdapterType extends Adapter> {
    filePath: string;
    routesDirectory: string;

    base?: string;

    adapter: AdapterType;
    handlers: Partial<RouteHandlers<GetHandlerType<AdapterType>>>;
}

export class Route<AdapterType extends Adapter> {
    /**
     * The route string
     */
    public readonly route: string;

    /**
     * The file this route belongs to
     */
    public readonly filePath: string;

    /**
     * The directory this route was found in
     */
    public readonly routesDirectory: string;

    /**
     * The adapter the route is using
     */
    public readonly adapter: AdapterType;

    /**
     * All handlers exported from the file
     */
    public readonly handlers: Partial<RouteHandlers<GetHandlerType<AdapterType>>>;

    /**
     * The base path for the roues
     * @private
     * @default ""
     */
    private readonly base: string;

    constructor(data: RouteParams<AdapterType>) {
        this.routesDirectory = data.routesDirectory;
        this.handlers = data.handlers;
        this.filePath = data.filePath;
        this.adapter = data.adapter;
        this.base = data.base || '';

        // Resolve the route
        this.route = filePathToRoute(this.filePath, this.routesDirectory);
        this.route = formatRoutePath(this.route, this.adapter);
        this.route = formatRoutePathSegment(this.base) + this.route;
    }
}
