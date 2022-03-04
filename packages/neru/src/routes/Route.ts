import type { RouteMethods } from '../methods/methods.d';
import { stripTrailingSlash } from 'ghoststools';
import { Adapter } from '..';
import { filePathToRoute } from '../utils/fs';

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
        this.route = Route.formatRoutePath(this.route, adapter);
    }

    static formatRoutePath<AdapterType extends Adapter>(
        route: string,
        adapter: AdapterType,
    ) {
        return route.replace(
            /\[(\.\.\.)?([^ ]+?)\]/gi,
            (param, isSpread, slug) => {
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
            },
        );
    }
}
