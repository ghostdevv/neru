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

Route files are simple to use, if you are familliar with `express.Router` then you will find this easy. Neru does not use `express.Router` but it does support the same [methods](<(https://expressjs.com/en/4x/api.html#routing-methods)>)

> This part of neru has been changed a lot and might change again before 1.0, please keep that in mind.

```js
import { route } from 'neru';
export const router = route();

router.get('/', (req, res) => res.send('Hello World'));
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
