import { type Method, methods, lowercaseMethods } from '@nerujs/methods';
import type { RouteHandlers, RawRouteHandlers } from './handlers';
import { pathToFileURL } from 'url';

const isValidMethod = (method: any): method is Method =>
    methods.includes(method);

export const importRouteHandlers = async <HandlerType>(path: string) => {
    const { href: pathUrl } = pathToFileURL(path);

    const rawHandlers: RawRouteHandlers<HandlerType> = await import(pathUrl);
    const handlers: RouteHandlers<HandlerType> = new Map();

    for (const [method, value] of Object.entries(rawHandlers)) {
        if (!isValidMethod(method)) {
            // * TEMPORARY - If using old lowercase methods warn
            if (lowercaseMethods.includes(method.toLowerCase() as any)) {
                throw new Error(
                    `Lowercase HTTP verbs not supported, SEE https://neru.dev/guide/migrate/version-one.html`,
                );
            }

            continue;
        }

        // Method is valid so assign the handler to it
        handlers.set(method, value);
    }

    return {
        handlers,
        all: rawHandlers.ALL,
    };
};
