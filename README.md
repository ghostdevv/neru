# Neru Monorepo

The lightweight **file-based router** for [Hapi](https://github.com/hapijs/hapi) and [Express](https://github.com/expressjs/express) (more coming soon!).  Easily connect your project to any backend framework with Neru's adapters.

In this repo you can find the packages for `neru`, `create-neru` cli, and the adapters.

> note: Neru is still a work in progress!

# Get Started

You can get started by creating your neru project:

```bash
npm init neru my-project
```

# Packages

## Core:

| Package                                       | Documentation                                    | Changelog                                                                   |
|-----------------------------------------------|--------------------------------------------------|-----------------------------------------------------------------------------|
| [neru](packages/neru)                         | [Documentation](packages/neru/README.md)         | [Changelog](packages/neru/CHANGELOG.md)                                     |
| [create-neru](packages/create-neru)                         | [Documentation](packages/create-neru/README.md)         | [Changelog](packages/create-neru/CHANGELOG.md)         |

## Adapters:
create-
| Adapter | Package                                             | Documentation                                       | Changelog                                          |
|---------|-----------------------------------------------------|-----------------------------------------------------|----------------------------------------------------|
| Hapi    | [@nerujs/adapter-hapi](packages/adapter-hapi)       | [Documentation](packages/adapter-hapi/README.md)    | [Changelog](packages/adapter-hapi/CHANGELOG.md)    |
| Express | [@nerujs/adapter-express](packages/adapter-express) | [Documentation](packages/adapter-express/README.md) | [Changelog](packages/adapter-express/CHANGELOG.md) |

## Misc:

| Package                                       | Documentation                                    | Changelog                                       |
|-----------------------------------------------|--------------------------------------------------|-------------------------------------------------|
| [@nerujs/methods](packages/methods)           | [Documentation](packages/methods/README.md)      | [Changelog](packages/methods/CHANGELOG.md)      |
