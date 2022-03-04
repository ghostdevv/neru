import { filePathToRoute, formatRoutePath } from './utils';
import type { RouteMethods } from '../methods/methods.d';
import { Adapter } from '../adapters/adapter';

export class Route<AdapterType extends Adapter, MethodType> {
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
     * All methods exported from the file
     */
    public readonly methods: Partial<RouteMethods<MethodType>>;

    constructor(
        filePath: string,
        routesDirectory: string,
        adapter: AdapterType,
        methods: Partial<RouteMethods<MethodType>>,
    ) {
        this.routesDirectory = routesDirectory;
        this.filePath = filePath;
        this.methods = methods;

        // Resolve the route
        this.route = filePathToRoute(filePath, routesDirectory);
        this.route = formatRoutePath(this.route, adapter);
    }
}
