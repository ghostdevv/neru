# Handlers

Every route file will export route handlers, these correspond to http verbs such as `GET`, `POST`, `PUT`, etc. The shape of a route handler varies by framework, all these examples will use express but you can refer to the page on your framework in the [Adapters Section](/adapters/).

For example, if we had a file called `test.js` and wanted a `GET`, `POST`, and `DELETE` method we could do:

```js
// test.js

export const GET = (req, res) => {
    res.send('GET Hello World');
}

export const POST = (req, res) => {
    res.send('POST Hello World');
}

export const DELETE = (req, res) => {
    res.send('DELETE Hello World');
}
```

## ALL Handlers

Some frameworks support an `ALL` handler which will respond to any type of HTTP request. To see if your framework supports this check it's [adapter documentation](/adapters/).

:::tip NOTE
An `ALL` handler can be the only handler in a route file.
:::

```js
export const ALL = (req, res) => {
    res.send(`${req.method} Hello World`)
}
```

## Type Saftey

In our previous example, our route handlers aren't type safe. We can easily add a type like this:

```js
/** @type {import('express').RequestHandler} */
export const GET = (req, res) => {
    res.send('Hello World')
}
```

However to make it easier, all official Neru adapters (and most unofficial!) provide a `route` function that adds Type Saftey:

```js
import { route } from '@nerujs/express';

export const GET = route((req, res) => {
    res.send('Hello World')
})
```

:::tip NOTE
If you prefer to type manually refer to the "Typing Manually" section of the [Adapter docs for your framework](/adapters/).
:::
