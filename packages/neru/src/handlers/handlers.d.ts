import type { LowercaseMethod } from '@nerujs/methods';

export interface RouteHandlers<HandlerType = unknown>
    extends Record<LowercaseMethod, HandlerType> {}

export interface RawRouteHandlers<HandlerType = unknown>
    extends Record<Exclude<LowercaseMethod, 'delete'>, HandlerType> {
    /**
     * This is a alias for the delete method
     */
    del?: HandlerType;
}
