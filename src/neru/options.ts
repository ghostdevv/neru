import type { Adapter } from '../adapters/adapter';

export interface NeruOptions<AdapterType extends Adapter> {
    /**
     * The route files neru should read
     */
    routes?: string | string[];

    /**
     * The adapter that works with your server choice!
     */
    adapter: AdapterType;

    /**
     * Your server
     */
    server: AdapterType extends Adapter<infer T> ? T : unknown;

    /**
     * Enable debug messages
     */
    debug?: boolean;
}
