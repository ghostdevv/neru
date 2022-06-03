# Express Adapter

This is the official adapter for express and neru, you can find the code for that at [packages/adapter-express](https://github.com/ghostdevv/neru/tree/main/packages/adapter-express)

## Creating your project

### Neru CLI

The quickest way to get started with Neru is using the [Neru CLI](/guide/#neru-cli). This CLI has an option for the Express adapter!

### Manually

Please [read the guide here](/guide/#add-neru-to-an-existing-project) to find out how to use neru on a new/existing project manually.

Here is an example what your project's main file might look like:

```js
import { adapter } from '@nerujs/express';
import express from 'express';
import { neru } from 'neru';

const server = express();

await neru({
    server,
    adapter,
    routes: 'src/routes',
});

server.listen(4000, () => {
    console.log('Online on http://localhost:4000');
});
```

You will need the following packages:

```bash
npm install express neru @nerujs/express
```

## Routes

> Before you read how to make routes using the express adapter make sure you read [how route files work in neru](/guide/routes).

The express adapter exports the `route` function and we recommend you use this for type saftey, though it's not required.

### Type Safe

```js
import { route } from '@nerujs/express';

export const get = route((req, res) => {
    res.send('Hello World');
});
```

### Basic

```js
export const get = (req, res) => {
    res.send('Hello World');
};
```

### Typing Manually

If you want to be type safe but not use the provided tools, here is how you can do that:

```ts
import type { RequestHandler } from 'express'

export const get: RequestHandler = (req, res) => {
    res.send('Hello World')
}
```