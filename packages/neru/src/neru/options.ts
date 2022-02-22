import type { Adapter } from '../adapters/adapter';
import type { ConsoliteLogger } from 'consolite';

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
     */
    routes: string | string[];

    /**
     * Neru Options
     */
    options?: Partial<NeruOptions>;
}

export interface NeruOptions {
    /**
     * Enable debug messages
     */
    debug?: boolean;
}
