import type { LowercaseMethod } from '@nerujs/methods';

export interface RouteHandlers<HandlerType = unknown>
    extends Record<LowercaseMethod, HandlerType> {}

export interface RawRouteHandlers<HandlerType = unknown>
    extends Omit<RouteHandlers<HandlerType>, 'delete'> {
    /**
     * This is a alias for the delete method
     */
    del?: HandlerType;
}
