# Getting Started

## Creating your project

The best way to get started with Neru is our cli. You can run the command to boostrap a project with any of our adapters:

```bash
npm init neru@latest my-project
```

## Add Neru to an existing project

### Installing

First install Neru and an adapter of your choice, for this demo we will use Express.

```bash
npm i neru @nerujs/express express
```

### Setup Neru

Now that our adapter is installed, we can import neru and pass in our `adapter`, `server`, and `routes` directory:

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
