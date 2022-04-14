import assert from 'assert';
import { test } from 'uvu';

import { validateAdapter } from '../../../src/adapters/validate';
import { Adapter } from '../../../src/adapters/adapter';

type GenericAdapter = Adapter<any, any>;

test('must have a name param', () => {
    // @ts-ignore
    const adapter: GenericAdapter = {};
    assert.throws(() => validateAdapter(adapter));
});

test("must have a name that's a string", () => {
    // @ts-ignore
    const adapter: GenericAdapter = { name: true };
    assert.throws(() => validateAdapter(adapter));
});

test('must have an addRoute param', () => {
    // @ts-ignore
    const adapter: GenericAdapter = { name: 'test' };
    assert.throws(() => validateAdapter(adapter));
});

test("must have an addRoute param that's a function", () => {
    // @ts-ignore
    const adapter: GenericAdapter = { name: 'test', addRoute: true };
    assert.throws(() => validateAdapter(adapter));
});

test('if has formatParamRoute it must be a function', () => {
    const adapter: GenericAdapter = {
        name: 'test',
        addRoute: () => {},
        // @ts-ignore
        formatParamRoute: true,
    };

    assert.throws(() => validateAdapter(adapter));
});

test('if has formatSpreadRoute it must be a function', () => {
    const adapter: GenericAdapter = {
        name: 'test',
        addRoute: () => {},
        // @ts-ignore
        formatSpreadRoute: true,
    };

    assert.throws(() => validateAdapter(adapter));
});

test('formatParamRoute is optional', () => {
    const adapter: GenericAdapter = {
        name: 'test',
        addRoute: () => {},

        formatSpreadRoute: () => '',
    };

    validateAdapter(adapter);
});

test('formatSpreadRoute is optional', () => {
    const adapter: GenericAdapter = {
        name: 'test',
        addRoute: () => {},

        formatParamRoute: () => '',
    };

    validateAdapter(adapter);
});

test('valid adapter works', () => {
    const adapter: GenericAdapter = {
        name: 'test',
        addRoute: () => {},

        formatParamRoute: () => '',
        formatSpreadRoute: () => '',
    };

    validateAdapter(adapter);
});

test.run();
