import type { RouteMethods, RawRouteMethods } from './methods';
import type { ConsoliteLogger } from 'consolite';
import { pathToFileURL } from 'url';

export const importMethods = async <MethodType>(
    path: string,
    logger: ConsoliteLogger,
): Promise<Partial<RouteMethods<MethodType>>> => {
    const rawRouteMethods: Partial<RawRouteMethods<MethodType>> = await import(
        pathToFileURL(path).href
    );

    // If delete is found warn that it will be ignored
    if ((rawRouteMethods as Record<string, unknown>)['delete'])
        logger.warn(
            `Exported properties called "delete" are ignored, please use "del" - ${path}`,
        );

    const routeMethods: Partial<RouteMethods<MethodType>> = {
        ...rawRouteMethods,
    };

    if (rawRouteMethods.del) {
        routeMethods['delete'] = rawRouteMethods.del;

        // @ts-ignore
        delete routeMethods.del;
    }

    return routeMethods;
};
