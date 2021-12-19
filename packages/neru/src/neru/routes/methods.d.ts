import type { LowercaseMethod } from '@nerujs/methods';

export interface RouteMethods<MethodValue = unknown>
    extends Record<LowercaseMethod, MethodValue | MethodValue[]> {
    /**
     * This allows you to respond to any method
     */
    all?: MethodValue;
}

export interface RawRouteMethods<MethodValue = unknown>
    extends Omit<RouteMethods<MethodValue>, 'delete'> {
    /**
     * This is a alias for the delete method
     */
    del?: MethodValue | MethodValue[];
}
