import { LowercaseMethod, lowercaseMethods } from '@nerujs/methods';
import type { RouteMethods, RawRouteMethods } from './methods';
import { logger } from '../utils/logger';
import { pathToFileURL } from 'url';

export const importMethods = async <MethodType>(
    path: string,
): Promise<Partial<RouteMethods<MethodType>>> => {
    const rawRouteMethods: Partial<RawRouteMethods<MethodType>> = await import(
        pathToFileURL(path).href
    );

    // If delete is found warn that it will be ignored
    if ((rawRouteMethods as Record<string, unknown>)['delete'])
        logger.warn(
            `Exported properties called "delete" are ignored, please use "del" - ${path}`,
        );

    const routeMethods: Partial<RouteMethods<MethodType>> = {};

    for (const [key, value] of Object.entries(rawRouteMethods)) {
        // If the key is del we need to map it to delete
        if (key == 'del') {
            routeMethods['delete'] = value;
            continue;
        }

        const method = key as LowercaseMethod;

        if (method == 'delete' || !lowercaseMethods.includes(method)) continue;

        routeMethods[method] = value;
    }

    return routeMethods;
};
