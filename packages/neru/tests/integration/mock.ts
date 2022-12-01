import type { LowercaseMethod } from '@nerujs/methods';
import type { Adapter } from '../../src/index';

export type HandlerType = {};
export type ServerType = Map<string, Partial<MockServerValue>>;

interface MockServerValue extends Record<LowercaseMethod, HandlerType> {
    all?: HandlerType;
}

export const createMockServer = (): ServerType => new Map();

export const adapter: Adapter<ServerType, HandlerType> = {
    name: 'mock',

    restrictAllHandler: false,

    addHandler: ({ server, route, method, handler }) =>
        void server.set(route, { ...(server.get(route) || {}), [method]: handler }),

    addAllHandler: ({ server, route, handler }) =>
        void server.set(route, { ...(server.get(route) || {}), all: handler }),

    formatParamRoute: (slug) => slug,
    formatSpreadRoute: (slug) => slug,
};
