The problem with different @vercel/og resolution for Pages Router and App Router.

## Step to reproduce

First, start the dev server:

```console
$ npm i
$ npm run dev

> repro-next-vercel-og-resolution@0.1.0 dev
> next dev

  ▲ Next.js 14.3.0-canary.40
  - Local:        http://localhost:3000

 ✓ Starting..
 ✓ Ready in 2.2s
```

Then, open a new terminal and run the following commands:

```console
$ curl http://localhost:3000/api/pages-route
$ curl http://localhost:3000/api/app-route
```

Finally, check the output of the dev server.

```console
...
 ✓ Compiled /api/pages-route in 195ms (65 modules)
node_modules/@vercel/og/dist/index.node.js
 GET /api/pages-route 200 in 378ms
 ✓ Compiled /api/app-route in 247ms (88 modules)
node_modules/next/dist/compiled/@vercel/og/index.node.js
 GET /api/app-route 200 in 382ms
```

Why do Pages Router and App Router resolve `@vercel/og` differently?

## The behavior with `--turbo` option

Surprisingly, when `--turbo` option is passed, Pages Router also resolves `@vercel/og` to `node_modules/next/dist/compiled/@vercel/og/index.node.js`.

```console
$ npm run dev -- --turbo

> repro-next-vercel-og-resolution@0.1.0 dev
> next dev --turbo

  ▲ Next.js 14.3.0-canary.40 (turbo)
  - Local:        http://localhost:3000

 ✓ Starting...
 ✓ Ready in 967ms
 ✓ Compiled /api/pages-route in 44ms
node_modules/next/dist/compiled/@vercel/og/index.node.js
 GET /api/pages-route 200 in 175ms
 ✓ Compiled /api/app-route in 72ms
node_modules/next/dist/compiled/@vercel/og/index.node.js
 GET /api/app-route 200 in 153ms
```
