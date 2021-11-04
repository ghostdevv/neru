import type { LowercaseMethod } from './methods';

export interface RouteMethods<MethodValue = unknown>
    extends Record<LowercaseMethod, MethodValue> {
    /**
     * This allows you to respond to any method
     */
    all: MethodValue;
}
