import type { LowercaseMethod } from '@nerujs/methods';

export type RouteHandlers<HandlerType = unknown> = Map<
    LowercaseMethod,
    HandlerType
>;

export interface RawRouteHandlers<HandlerType = unknown>
    extends Record<Exclude<LowercaseMethod, 'delete'>, HandlerType> {
    /**
     * This is a alias for the delete method
     */
    del?: HandlerType;
}
