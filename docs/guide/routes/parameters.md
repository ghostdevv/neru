# Parameters

## Regular Parameters

Parameters in route names have the shape `[param]`. You can use this in a route file or directory to capture dynamic information for a route. For example if you wanted a URL like `/post/1`, `/post/2` etc you could do the following:

```
posts/
  [id].js
```

## Spread Parameters

Spread Parameters/Catch All Parameters are a way of getting multiple parts of the url dynamically.

```
test/
  [id].js               - This would react to /test/something, /test/abc etc
test2/
  [...parts]            - This would react to /test/something, /test/something/else, /test/something/abc/else etc
```

For example we could impliment GitHubs file viewer with the path:

```
[org]/
  [repo]/
    tree/
      [branch]/
        [...file].js
```

A request for the url `/sveltejs/kit/tree/master/documentation/docs/04-advanced-routing.md` would give us the following parameters:

```js
{
  org: 'sveltejs',
  repo: 'kit',
  branch: 'master',
  file: 'documentation/docs/04-advanced-routing.md'
}
```
:::tip NOTE
Not all frameworks support spread params, please check the [documentation for your specific adapter](/adapters/)
:::

:::tip Attribution
Thanks to the [SvelteKit documention](https://kit.svelte.dev/) for the above example
:::

## Accessing params

This depends on what framework you are using with Neru, for example express would be:

```js
// routes/posts/[id].js
import { route } from '@nerujs/express';

export const GET = route((req, res) => {
    const { id } = req.params;
})
```

You should refer to your framework of choosing's docs for more information about accessing params.
