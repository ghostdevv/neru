import { Adapter } from "../adapters/Adapter";

export const defaults = {
    routes: 'src/routes',
};

export interface NeruOptions<AdapterType extends Adapter<unknown>> {
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
}
