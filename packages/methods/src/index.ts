import { METHODS } from 'http';

/**
 * http.METHODS
 */
export type Method =
    | 'ACL'
    | 'BIND'
    | 'CHECKOUT'
    | 'CONNECT'
    | 'COPY'
    | 'DELETE'
    | 'GET'
    | 'HEAD'
    | 'LINK'
    | 'LOCK'
    | 'M-SEARCH'
    | 'MERGE'
    | 'MKACTIVITY'
    | 'MKCALENDAR'
    | 'MKCOL'
    | 'MOVE'
    | 'NOTIFY'
    | 'OPTIONS'
    | 'PATCH'
    | 'POST'
    | 'PROPFIND'
    | 'PROPPATCH'
    | 'PURGE'
    | 'PUT'
    | 'REBIND'
    | 'REPORT'
    | 'SEARCH'
    | 'SOURCE'
    | 'SUBSCRIBE'
    | 'TRACE'
    | 'UNBIND'
    | 'UNLINK'
    | 'UNLOCK'
    | 'UNSUBSCRIBE';

/**
 * Lowercase Method
 */
export type LowercaseMethod = Lowercase<Method>;

/**
 * A typed verion of http.METHODS
 */
export const methods: Method[] = METHODS as Method[];

/**
 * The lowercase typed version of http.METHODS
 */
export const lowercaseMethods: LowercaseMethod[] = methods.map((method) =>
    method.toLowerCase(),
) as LowercaseMethod[];
