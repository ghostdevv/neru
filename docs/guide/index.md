# Quick Start

Neru comes with a CLI for generating new projects, to use it open your terminal and run:

```bash
npm create neru@latest my-project
```

## Project Overview

```
src/                - Project source code
  index.ts          - Entry point to your app, all your setup code goes here
  routes/           - The routes for your app, autoloaded by neru
    index.ts        - Your / route
```

## TypeScript

The CLI will ask you whether you would like to use TypeScript. The template uses tsm to run code without a compilation step, but you can easily swap it out for tsc or another compiler like tsup if you prefer a compilation step.
