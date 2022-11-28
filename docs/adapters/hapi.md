# Hapi JS Adapter

This is the official adapter for hapi and neru, you can find the code for that at [packages/adapter-hapi](https://github.com/ghostdevv/neru/tree/main/packages/adapter-hapi)

## Feature Support

| Feature                                                         | Supported |
|-----------------------------------------------------------------|-----------|
| [Parameters](/guide/routes/parameters#regular-parameters)       | ✅        |
| [Spread Parameters](/guide/routes/parameters#spread-parameters) | ✅        |
| [All Handler](/guide/routes/handlers#all-handlers)              | ✅        |

## Creating your project

### Neru CLI

The quickest way to get started with Neru is using the [Neru CLI](/guide/#neru-cli). This CLI has an option for the hapi adapter!

### Manually

Please [read the guide here](/guide/#add-neru-to-an-existing-project) to find out how to use neru on a new/existing project manually.

Here is an example what your project's main file might look like:

```js
import { adapter } from '@nerujs/hapi';
import Hapi from '@hapi/hapi';
import { neru } from 'neru';

const server = Hapi.server({
    port: 4000,
    host: 'localhost',
});

await neru({
    adapter,
    server,
    routes: 'src/routes',
});

await server.start();
console.log(`Online on ${server.info.uri}`);
```

You will need the following packages:

```bash
npm install @hapi/hapi neru @nerujs/hapi
```

## Routes

> Before you read how to make routes using the hapi adapter make sure you read [how route files work in neru](/guide/routes/files).

The hapi adapter exports the `route` function and we recommend you use this for type saftey, though it's not required.

### Type Safe

```js
import { route } from '@nerujs/hapi';

export const get = route({
    handler() {
        return 'Hello world!';
    },
});
```

### Basic

```js
export const get = {
    handler() {
        return 'Hello world!';
    },
};
```

### Typing Manually

If you want to be type safe but not use the provided tools, here is how you can do that:

```ts
import type { ServerRoute } from '@hapi/hapi'

export const get: Omit<ServerRoute, 'path' | 'method'> = {
    handler() {
        return 'Hello world!';
    },
};
```

You can skip the `Omit` type helper by using the import from neru:

```ts
/** @type {import('@nerujs/hapi').NeruHapiServerRoute} */
export const get: NeruHapiServerRoute = {
    handler() {
        return 'Hello world!';
    },
};
```