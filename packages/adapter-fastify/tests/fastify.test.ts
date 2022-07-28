import { createServer } from './mock';
import assert from 'assert';
import { test } from 'uvu';

test('gets index route', async () => {
    const { request, server } = await createServer();
    const response = await request('/');

    assert.equal(response.data?.message, 'Ok');

    await server.close();
});

test('gets param route', async () => {
    const { request, server } = await createServer();
    const response = await request('/param/test');

    assert.equal(response.data?.message, 'test');

    await server.close();
});

test('gets spread route', async () => {
    const { request, server } = await createServer();
    const response = await request('/spread/test/test2');

    assert.equal(response.data?.message, 'test/test2');

    await server.close();
});

test.run();
