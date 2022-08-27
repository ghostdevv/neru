# Creating Routes

## File Naming

The way you write your file & folder names corresponds to what route they are. Below you can see an example of this.

![file name to route mapping](/file-tree.png)

## Route Params

### Param Routes

To create a param route you wrap the name in `[]`, for example a param of `id` would be `[id].js`. These will automatically be added to your frameworks param system, for example in express it would be on `req.params.id`

### Spread Param Routes

Spread Params are like regular params except they catch multiple url segments. You create them by adding `...` to your param name. For example a spread param of path would be `[...path].js`. You can view a example of [how these work here](https://kit.svelte.dev/docs/routing#advanced-routing-rest-parameters).

## Adding handlers

In a Route File we can export data for any of the HTTP Methods (such as GET, POST, PUT etc). The exported data should be what your framework of choice uses as a route handler. Lets look at an example in Express and Hapi

Express:

```js
export const get = (req, res) => {
    res.send('Hello World');
}
```

Hapi:

```js
export const get = {
    handler() {
        return 'Hello World';
    }
}
```

## Handler Type Saftey

In the previous example our route handlers aren't type safe, all Neru provided Adapters should export a function that adds type saftey and intellisense.

```js
import { route } from '@nerujs/express';

export const get = route((req, res) => {
    res.send('Hello World');
});
```

Custom adapters or community adapters might not do this, so you might need to type it manually. For an example we can do that with express like so:

```ts
import type { RequestHandler } from 'express';

export const get: RequestHandler = (req, res) => {
    res.send('Hello World')
}
```