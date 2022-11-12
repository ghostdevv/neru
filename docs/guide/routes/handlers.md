# Handlers

Every route file will export route handlers, these correspond to http verbs such as `get`, `post`, `put`, etc. The shape of a route handler varies by framework, all these examples will use express but you can refer to the page on your framework in the [Adapters Section](/adapters/).

:::tip NOTE
Because the word `delete` in JavaScript is reserved, if you want to use a `delete` handler it must be named `del`
:::

For example, if we had a file called `test.js` and wanted a `GET`, `POST`, and `DELETE` method we could do:

```js
// test.js

export const get = (req, res) => {
    res.send('GET Hello World');
}

export const post = (req, res) => {
    res.send('POST Hello World');
}

export const del = (req, res) => {
    res.send('DELETE Hello World');
}
```

## All Handlers

Some frameworks support an `all` handler which will respond to any type of HTTP request. To see if your framework supports this check it's [adapter documentation](/adapters/).

```js
export const all = (req, res) => {
    res.send(`${req.method} Hello World`)
}
```

## Type Saftey

In our previous example, our route handlers aren't type safe. We can easily add a type like this:

```js
/** @type {import('express').RequestHandler} */
export const get = (req, res) => {
    res.send('Hello World')
}
```

However to make it easier, all official Neru adapters (and most unofficial!) provide a `route` function that adds Type Saftey:

```js
import { route } from '@nerujs/express';

export const get = route((req, res) => {
    res.send('Hello World')
})
```

:::tip NOTE
If you prefer to type manually refer to the "Typing Manually" section of the [Adapter docs for your framework](/adapters/).
:::
