import type { Adapter } from '../../src/index';

export type HandlerType = {};
export type ServerType = Map<string, HandlerType>;

export const createMockServer = (): ServerType => new Map();

export const adapter: Adapter<ServerType, HandlerType> = {
    name: 'mock',

    addHandler: ({ server, route, method }) => void server.set(route, method),

    formatParamRoute: (slug) => slug,
    formatSpreadRoute: (slug) => slug,
};
