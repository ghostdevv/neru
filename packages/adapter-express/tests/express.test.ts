import { createServer } from './mock';
import assert from 'assert';
import { test } from 'uvu';

test('gets index route', async () => {
    const { request, close } = await createServer();
    const response = await request('/');

    assert.equal(response.data?.message, 'Ok');

    close();
});

test('gets param route', async () => {
    const { request, close } = await createServer();
    const response = await request('/param/test');

    assert.equal(response.data?.message, 'test');

    close();
});

test('gets spread route', async () => {
    const { request, close } = await createServer();
    const response = await request('/spread/test/test2');

    assert.equal(response.data?.message, 'test/test2');

    close();
});

test('gets all route (POST)', async () => {
    const { request, close } = await createServer();
    const response = await request('/all', 'POST');

    assert.equal(response.data?.message, 'Ok');

    close();
});

test('gets all route (GET)', async () => {
    const { request, close } = await createServer();
    const response = await request('/all');

    assert.equal(response.data?.message, 'Ok GET');

    close();
});

test.run();
