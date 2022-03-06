import { adapter } from '../src/index';
import axios, { Method } from 'axios';
import Hapi from '@hapi/hapi';
import { neru } from 'neru';

export const createServer = async () => {
    const server = Hapi.server({
        host: 'localhost',
        port: 35309,
    });

    await neru({
        adapter,
        server,
        routes: 'tests/routes',
    });

    await server.start();

    const request = axios.create({
        baseURL: server.info.uri,
    });

    return {
        server,
        request: (url: string, method: Method = 'GET') =>
            request({
                url,
                method,
            }),
    };
};
