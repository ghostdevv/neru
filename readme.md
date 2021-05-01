# Neru

Neru is the file router for Express, build your express apps faster with a easy to use routing solution.

> **Important**<br /> Neru is still in development, not everything you see will be the same at the 1.0 release. If you need help you can reach out on the [discord](https://discord.gg/2Vd4wAjJnm)

# Core Features

-   [x] Dynamic Routing
-   [ ] All types of requests: GET, POST
-   [ ] Route files based on express.router
-   [ ] Cli tools
-   [ ] Middlewear support
-   [ ] Custom data to routes
-   [ ] Fallback routes

# Getting Started

Neru is easy to insert into existing projects, you just create your express app then pass that to the router method. This will create a new instance of the neru router.

> If you try to run the router function on the same express app twice it will throw an error.

```js
const express = require('express');
const { router } = require('neru');

const app = express();
const neru = router(app);

app.listen(3000, () => console.log('Online'));
```

# Route Files

Route files are simple to use, if you are familliar with `express.router` then you will find this easy.

> This part of neru has been changed a lot and might change again before 1.0, please keep that in mind.

```js
const route = require('neru/route');

route.get('/', (req, res) => res.send('Hello World'));

module.exports = route;
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
