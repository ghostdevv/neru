# Neru

> Neru is still a work in progress!

Neru is a small and lightweight file system router designed to power your favourite backends. We currently maintain adapters for hapi, express, and fastify so you can get started with your favourite framework! But you might be able to find community adapters online, [or make your own!](#)

# Getting Started

## Installing

First you need to install `neru` and your `adapter` of choice, you can look below for a list of adapters, in this example we will assume you are using hapi.

```bash
npm i neru @nerujs/hapi
```

## Setup

Now we have neru and our adapter installed we can run neru and pass in our `hapi server`, `adapter`, and `routes` directory.

```js
import { adapter } from '@nerujs/hapi';
import Hapi from '@hapi/hapi';
import { neru } from 'neru';

const server = Hapi.server({
    host: 'localhost',
    port: 3000,
});

await neru({
    adapter,
    server,
    routes: 'src/routes',
});

await server.start();

console.log(`Online on ${server.info.uri}`);
```

## Creating a route

In our `src/routes` directory we can create a index route, this will correspond to `/` on our server. In that file we can export a hapi route object

```js
export const get = {
    handler() {
        return 'Hello World'
    }
}
```

Theres also a `route` function exported by most adapters that is optional but provides type completion:

```js
import { route } from '@nerujs/hapi';

export const get = route({
    handler() {
        return 'Hello World'
    }
})
```

# Adapters

| Adapter | Package                                             | Documentation                                       | Changelog                                          |
|---------|-----------------------------------------------------|-----------------------------------------------------|----------------------------------------------------|
| Hapi    | [@nerujs/adapter-hapi](packages/adapter-hapi)       | [Documentation](packages/adapter-hapi/README.md)    | [Changelog](packages/adapter-hapi/CHANGELOG.md)    |
| Express | [@nerujs/adapter-express](packages/adapter-express) | [Documentation](packages/adapter-express/README.md) | [Changelog](packages/adapter-express/CHANGELOG.md) |