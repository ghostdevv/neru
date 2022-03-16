import type { Adapter } from '../adapters/adapter';

export interface NeruParams<AdapterType extends Adapter> {
    /**
     * The adapter that works with your server choice!
     */
    adapter: AdapterType;

    /**
     * Your server
     */
    server: AdapterType extends Adapter<infer T> ? T : unknown;

    /**
     * The route files neru should read
     * @default "src/routes"
     */
    routes: string | string[];

    /**
     * Neru Options
     */
    options?: NeruOptions;
}

export interface NeruOptions {
    /**
     * Enable debug messages
     */
    debug?: boolean;

    /**
     * Ignore files that match this regex
     */
    ignore?: RegExp;
}
