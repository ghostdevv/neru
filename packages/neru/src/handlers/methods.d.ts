import type { LowercaseMethod } from '@nerujs/methods';

export interface RouteMethods<HandlerType = unknown>
    extends Record<LowercaseMethod, HandlerType> {}

export interface RawRouteMethods<HandlerType = unknown>
    extends Omit<RouteMethods<HandlerType>, 'delete'> {
    /**
     * This is a alias for the delete method
     */
    del?: HandlerType;
}
