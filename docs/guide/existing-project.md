# Add Neru to an existing project

1. Install Neru and the adapter of your choice, for this demo we will be using `@nerujs/express`

    ```
    npm install neru @nerujs/express
    ```

2. Create your src/index.js file, make sure to use the adapter and framework of your choice. You can copy and paste the specific code you will need on your [adapters documentation page](/adapters/)

    ```js
    import { adapter } from '@nerujs/express';
    import { neru } from 'neru';

    await neru({
        server, // The server your framework uses, for express it's "const server = express()"
        adapter, // The Neru adapter, it's the first thing we import in this snippet
        routes: 'src/routes', // Your routes folder
    });
    ```

3. Make a folder called `routes` in `src`
4. Start using Neru!
