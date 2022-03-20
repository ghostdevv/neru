import { adapter } from '../src/index';
import axios, { Method } from 'axios';
import express from 'express';
import { neru } from 'neru';

export const createServer = async () => {
    const server = express();

    await neru({
        adapter,
        server,
        routes: 'tests/routes',
    });

    const raw = server.listen(4573);

    const request = axios.create({
        baseURL: `http://localhost:4573`,
    });

    return {
        server,
        close: () => raw.close(),
        request: (url: string, method: Method = 'GET') =>
            request({
                url,
                method,
            }),
    };
};
