import type { Adapter } from '../adapters/adapter';

export interface NeruOptions<AdapterType extends Adapter> {
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
     * Enable debug messages, you can also set the NERU_DEBUG environment variable to any value for this to be enabled
     */
    debug?: boolean;

    /**
     * Ignore files that match this regex
     */
    ignore?: RegExp;
}
