import { adapter } from '../src/index';
import axios, { Method } from 'axios';
import fastify from 'fastify';
import { neru } from 'neru';

export const createServer = async () => {
    const server = fastify();

    await neru({
        adapter,
        server,
        routes: 'tests/routes',
    });

    const uri = await server.listen({ port: 3000 });

    const request = axios.create({
        baseURL: uri,
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

createServer();
