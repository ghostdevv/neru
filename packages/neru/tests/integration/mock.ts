import type { Adapter } from '../../src/index';

export type HandlerType = {};
export type ServerType = Map<string, HandlerType>;

export const createMockServer = (): ServerType => new Map();

export const adapter: Adapter<ServerType, HandlerType> = {
    name: 'mock',

    addRoute: (server, route, methods) => void server.set(route.route, methods),

    formatParamRoute: (slug) => slug,
    formatSpreadRoute: (slug) => slug,
};
