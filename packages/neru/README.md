# Neru

> Neru is still a work in progress!

The fast and lightweight **file-based router** for [Hapi](https://github.com/hapijs/hapi) and [Express](https://github.com/expressjs/express) (more coming soon!). Neru allows you to easily organise and manage your project by it's file system whilst keeping the framework you love.

# Quick Start

You can get started by creating your Neru project:

```bash
npm init neru my-project
```

# Adapters

Adapters allow you to use neru with your favourite framework.  Get started with the ones below or [suggest a new one to be added next](https://github.com/ghostdevv/neru/issues/new).

| Adapter | Package                                             | Documentation                                       | Changelog                                          |
|---------|-----------------------------------------------------|-----------------------------------------------------|----------------------------------------------------|
| Hapi    | [@nerujs/adapter-hapi](packages/adapter-hapi)       | [Documentation](packages/adapter-hapi/README.md)    | [Changelog](packages/adapter-hapi/CHANGELOG.md)    |
| Express | [@nerujs/adapter-express](packages/adapter-express) | [Documentation](packages/adapter-express/README.md) | [Changelog](packages/adapter-express/CHANGELOG.md) |

# Add neru yourself

It only takes a few easy steps!

## Installing

Install `neru` and your `adapter` of choice.  Look below for a list of adapters.  In this example, we will use express.

```bash
npm i neru @nerujs/express express
```

## Setup

Now that we have Neru and our adapter installed, we can run Neru and pass in our `express server`, `adapter`, and `routes` directory.

```js
import { adapter } from '@nerujs/express';
import express from 'express';
import { neru } from 'neru';

const server = express();

await neru({
    adapter,
    server,
    routes: 'src/routes',
});

server.listen(3000, () => console.log('Online on port 3000'));
```

## Creating a route

In our `src/routes` directory, we can create an index route.  This will correspond to `/` on our server. In that file we can export an express route handler.

```js
export const get = (req, res) => {
    res.send('Hello World');
}
```

There's also an optional `route` function exported by most adapters that provides type completion:

```js
import { route } from '@nerujs/express';

export const get = route((req, res) => {
    res.send('Hello World');
})
```

# Adapters

| Adapter | Package                                             | Documentation                                       | Changelog                                          |
|---------|-----------------------------------------------------|-----------------------------------------------------|----------------------------------------------------|
| Hapi    | [@nerujs/adapter-hapi](packages/adapter-hapi)       | [Documentation](packages/adapter-hapi/README.md)    | [Changelog](packages/adapter-hapi/CHANGELOG.md)    |
| Express | [@nerujs/adapter-express](packages/adapter-express) | [Documentation](packages/adapter-express/README.md) | [Changelog](packages/adapter-express/CHANGELOG.md) |
