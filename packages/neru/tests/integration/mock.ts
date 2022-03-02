import type { Adapter } from '../../src/index';

export type MethodType = {};
export type ServerType = Map<string, MethodType>;

export const createMockServer = (): ServerType => new Map();

export const adapter: Adapter<ServerType, MethodType> = {
    name: 'mock',

    addRoute: (server, route, methods) => void server.set(route.route, methods),

    formatParamRoute: (slug) => slug,
    formatSpreadRoute: (slug) => slug,
};
