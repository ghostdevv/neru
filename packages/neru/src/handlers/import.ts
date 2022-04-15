import { LowercaseMethod, lowercaseMethods } from '@nerujs/methods';
import type { RouteHandlers, RawRouteHandlers } from './handlers';
import { logger } from '../logger';
import { pathToFileURL } from 'url';

export const importRouteHandlers = async <HanlderType>(
    path: string,
): Promise<Partial<RouteHandlers<HanlderType>>> => {
    const rawHandlers: Partial<RawRouteHandlers<HanlderType>> = await import(
        pathToFileURL(path).href
    );

    // If delete is found warn that it will be ignored
    if ((rawHandlers as Record<string, unknown>)['delete'])
        logger.warn(
            `Exported properties called "delete" are ignored, please use "del" - ${path}`,
        );

    const handlers: Partial<RouteHandlers<HanlderType>> = {};

    for (const [key, value] of Object.entries(rawHandlers)) {
        // If the key is del we need to map it to delete
        if (key == 'del') {
            handlers['delete'] = value;
            continue;
        }

        const method = key as LowercaseMethod;

        if (method == 'delete' || !lowercaseMethods.includes(method)) continue;

        handlers[method] = value;
    }

    return handlers;
};
