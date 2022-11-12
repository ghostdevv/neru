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

test('gets all route', async () => {
    const { request, server } = await createServer();

    const response = await request('/all', 'DELETE');
    const response2 = await request('/all', 'GET');

    assert.equal(response.data?.message, 'Ok');
    assert.equal(response2.data?.message, 'Ok');

    await server.close();
});

test.run();
