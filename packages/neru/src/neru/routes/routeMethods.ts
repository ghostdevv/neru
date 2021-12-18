import type { LowercaseMethod } from '@nerujs/methods';
import { lowercaseMethods } from '@nerujs/methods';
import Joi from 'joi';

export interface RouteMethods<MethodValue = unknown>
    extends Record<LowercaseMethod, MethodValue> {
    /**
     * This allows you to respond to any method
     */
    all: MethodValue;
}

// @todo validate methods
export const routeMethodsSchema = Joi.object()
    .keys({
        ...Object.fromEntries(lowercaseMethods.map((m) => [m, Joi.any()])),
        all: Joi.any(),
    })
    .unknown(true);
