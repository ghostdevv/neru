import type { Method } from '@nerujs/methods';

export type RouteHandlers<HandlerType = unknown> = Map<Method, HandlerType>;

export interface RawRouteHandlers<HandlerType = unknown>
    extends Partial<Record<Method, HandlerType>> {
    /**
     * Special all handler
     */
    ALL?: HandlerType;
}
