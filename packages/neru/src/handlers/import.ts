import type { RouteHandlers, RawRouteHandlers } from './handlers';
import { type Method, methods } from '@nerujs/methods';
import { pathToFileURL } from 'url';

const isValidMethod = (method: string): method is Method =>
    methods.includes(method as Method);

export const importRouteHandlers = async <HandlerType>(path: string) => {
    const { href: pathUrl } = pathToFileURL(path);

    const rawHandlers: RawRouteHandlers<HandlerType> = await import(pathUrl);
    const handlers: RouteHandlers<HandlerType> = new Map();

    for (const [method, value] of Object.entries(rawHandlers)) {
        if (!isValidMethod(method)) continue;

        // Method is valid so assign the handler to it
        handlers.set(method, value);
    }

    return {
        handlers,
        all: rawHandlers.all,
    };
};
