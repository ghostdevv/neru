# Neru

Neru is the file router for Express, build your express apps faster with a easy to use routing solution.

> **Important**<br /> Neru is still in development, not everything you see will be the same at the 1.0 release. If you need help you can reach out on the [discord](https://discord.gg/2Vd4wAjJnm)

# Core Features

-   [x] Dynamic Routing
-   [x] All types of requests: [express request support](https://expressjs.com/en/4x/api.html#routing-methods)
-   [x] Route files based on express.Router
-   [ ] Cli tools
-   [x] Middlewear support
-   [ ] Custom data to routes
-   [ ] Fallback routes
-   [ ] Events
-   [ ] Files begining with \_ are ignored

# Possible Features

-   [ ] Plugin system
-   [ ] Code Editor Snippets (Built into CLI)
-   [ ] Case insensitive option

# Support

-   [ ] CJS
-   [ ] TypeScript

# Getting Started

> All of these examples use [esm](https://maximorlov.com/es-modules-in-nodejs/), if you don't know what that is then click [here](https://maximorlov.com/es-modules-in-nodejs/). You can use cjs (i.e. require) but it's recommended to use esm

Neru is easy to insert into existing projects, you just create your express app then pass that to the router method. This will create a new instance of the neru router.

> If you try to run the router function on the same express app twice it will throw an error.

```js
import express from 'express';
import { router } from 'neru';

const app = express();
const neru = router(app);

app.listen(3000, () => console.log('Online'));
```

# Route Files

Route files are simple to use, the boilerplate for a route file is 1 - 2 lines depending on whether you use esm or cjs, we recommend defining it like this:

-   ### CJS

    ```js
    const router = require('neru/route')();

    // Code

    module.exports = router;
    ```

-   ### Esm

    ```js
    import { route } from 'neru';
    export const router = route();

    // Code
    ```

Currently Neru does not block characters in route file names, but this is subject to change. You need to be careful when using special characters as some aren't [safe for a url](https://abramillar.com/2018/01/15/special-characters-short-words-urls/), also some are used by express for extended dynamic routing as seen [here](https://expressjs.com/en/4x/api.html#path-examples) so could cause unexpected behaviour.

> **Important Notes**<br>- Route files that begin with `_` are ignored by Neru.<br>- Route files are case sensitive

Example:

```js
import { route } from 'neru';
export const router = route();

router.get((req, res) => res.send('Hello World'));
```

# Parameters

Parameters can be given in file names, unlike express they are given wrapped in `[]`, for example in express you could write `/:id` in express and in neru it would be `[id]`.

> **Important**<br>This only effects file names, using router.get, router.post etc uses standard [express syntax](https://expressjs.com/en/guide/routing.html#route-parameters).

---

## Parameters

A route can have as many dynamic parameters as you like, for example: `[id]/[key]/[value].js`, you could even do `[id]/[key]-[value].js`.

## Spread Parameters

A route can also have spread parameters, like in javascript when spreading something we use `...`. For example if you had `[project]/[...files]` and made a request like this `/neru/src/index.js` that would return:

```js
{
    project: 'neru',
    files: 'src/index.js'
}
```
