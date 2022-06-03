# Configuring Neru

Neru ships with a few required options and a bunch of optional features that are configurable. All config options are passed into the main neru function which you should be familiar with from [the guide](/guide/config)

## Options

### adapter

- Type: `Adapter`

This is the adapter for your project, see [getting started](/guide/#neru-cli) for more information.

### server

- Type: `GetServerType<Adapter>`

The type of this is extracted from the adapter given, but it's whatever server your adapter expects. For example the [express adapter](/adapters/express) expects an express server.

### routes

- Type: `string | string[]`

- Default: `src/routes`

This is where your route files are located, you can have an array if you want multiple directories.

> Note: directories are read recursivley! So no need to specify every folder that contains routes, usually only the default is needed.

### debug

- Type: `boolean`

- Default: `false`

This provides some helpful debugging neru for diagnosing issues with Neru.

### base

- Type: `string`

- Default: ``

You can set a base path for all your routes. For example a base path of `/api` would mean all routes read would start with `/api`.

### ignore

- Type: `RegExp`

Ignore files that match this regex.

### announce

- Type: `boolean`

- Default: `true`

This shows a pretty list of all of your routes and methods in console after Neru has loaded.