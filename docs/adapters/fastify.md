# Fastify Adapter

This is the official adapter for fastify and neru, you can find the code for that at [packages/adapter-fastify](https://github.com/ghostdevv/neru/tree/main/packages/adapter-fastify)

## Feature Support

| Feature                                                         | Supported |
|-----------------------------------------------------------------|-----------|
| [Parameters](/guide/routes/parameters#regular-parameters)       | ✅        |
| [Spread Parameters](/guide/routes/parameters#spread-parameters) | ❌        |
| [ALL Handler](/guide/routes/handlers#all-handlers)              | ✅        |

:::tip NOTE
The ALL Handler uses the following HTTP verbs: `DELETE`, `GET`, `HEAD`, `PATCH`, `POST`, `PUT`, and `OPTIONS`
:::

## Creating your project

### Neru CLI

The quickest way to get started with Neru is using the [Neru CLI](/guide/#neru-cli). This CLI has an option for the Fastify adapter!

### Manually

Please [read the guide here](/guide/#add-neru-to-an-existing-project) to find out how to use neru on a new/existing project manually.

Here is an example what your project's main file might look like:

```js
import { adapter } from '@nerujs/fastify';
import fastify from 'fastify';
import { neru } from 'neru';

const server = fastify({
    logger: true,
});

await neru({
    adapter,
    server,
});

server.listen({ port: 4000 }, (error, address) => {
    console.log(error ? `Error: ${error}` : `Online: ${address}`);
});
```

You will need the following packages:

```bash
npm install fastify neru @nerujs/fastify
```

## Routes

> Before you read how to make routes using the express adapter make sure you read [how route files work in neru](/guide/routes/files).

The express adapter exports the `route` function and we recommend you use this for type saftey, though it's not required.

### Type Safe

```js
import { route } from '@nerujs/fastify';

export const GET = route({
    handler(request, reply) {
        return 'Hello world!';
    },
});
```

### Basic

```js
export const GET = route({
    handler(request, reply) {
        return 'Hello world!';
    },
});
```

### Typing Manually

If you want to be type safe but not use the provided tools, here is how you can do that:

```ts
import type { RouteOptions } from 'fastify'

export const GET: RouteOptions = {
    handler(request, reply) {
        return 'Hello world!';
    },
}
```