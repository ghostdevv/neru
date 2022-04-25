# Neru

> Neru is still a work in progress!

The fast and lightweight **file-based router** for [Hapi](https://github.com/hapijs/hapi) and [Express](https://github.com/expressjs/express) (more coming soon!). Neru allows you to easily organise and manage your project by it's file system whilst keeping the framework you love to use.

# Quick Start

You can get started by creating your neru project:

```bash
npm init neru my-project
```

# Add neru yourself

It only takes a few easy steps!

## Installing

First you need to install `neru` and your `adapter` of choice, you can look below for a list of adapters, in this example we will assume you are using express.

```bash
npm i neru @nerujs/express express
```

## Setup

Now we have neru and our adapter installed we can run neru and pass in our `express server`, `adapter`, and `routes` directory.

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

In our `src/routes` directory we can create a index route, this will correspond to `/` on our server. In that file we can export a express route handler

```js
export const get = (req, res) => {
    res.send('Hello World');
}
```

Theres also a `route` function exported by most adapters that is optional but provides type completion:

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