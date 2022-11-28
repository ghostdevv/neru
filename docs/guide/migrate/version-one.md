# Neru v1.0.0

Neru has reached version `1.0.0`, this guide is written to help you migrate to that version.

## Route Handlers

We changed route handlers from lowercase (`get`, `post`, etc) to uppercase (`GET`, `POST`, etc). In your route files you will need to uppercase them to reflect this, lets use express as an example:

```diff
import { route } from '@nerujs/express';

- export const get = route((req, res) => {
+ export const GET = route((req, res) => {
    res.send('Hello World')
})
```

The `del` handler has also been renamed to `DELETE` as we can do that with the uppercase handlers system:

```diff
import { route } from '@nerujs/express';

- export const del = route((req, res) => {
+ export const DELETE = route((req, res) => {
    res.send('Hello World')
})
```
