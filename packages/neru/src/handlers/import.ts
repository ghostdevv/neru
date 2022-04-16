import { LowercaseMethod, lowercaseMethods } from '@nerujs/methods';
import type { RouteHandlers, RawRouteHandlers } from './handlers';
import { pathToFileURL } from 'url';
import { logger } from '../logger';

export const importRouteHandlers = async <HanlderType>(path: string) => {
    const rawHandlers: Partial<RawRouteHandlers<HanlderType>> = await import(
        pathToFileURL(path).href
    );

    // If delete is found warn that it will be ignored
    if ((rawHandlers as Record<string, unknown>)['delete'])
        logger.warn(
            `Exported properties called "delete" are ignored, please use "del" - ${path}`,
        );

    const handlers: RouteHandlers<HanlderType> = new Map();

    for (const [key, value] of Object.entries(rawHandlers)) {
        // If the key is del we need to map it to delete
        if (key == 'del') {
            handlers.set('delete', value);
            continue;
        }

        const method = key as LowercaseMethod;

        if (method == 'delete' || !lowercaseMethods.includes(method)) continue;

        handlers.set(method, value);
    }

    return {
        handlers,
        all: rawHandlers.all,
    };
};
