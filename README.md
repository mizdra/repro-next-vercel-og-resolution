The problem with different @vercel/og resolution for Pages Router and App Router.

## Step to reproduce

First, start the dev server:

```console
$ npm i
$ npm run dev
> repro-next-vercel-og-resolution@0.1.0 dev
> next dev

   ▲ Next.js 14.1.3
   - Local:        http://localhost:3000

 ✓ Ready in 1100ms
```

Then, open a new terminal and run the following commands:

```console
$ curl http://localhost:3000/api/pages-route
$ curl http://localhost:3000/api/app-route
```

Finally, check the output of the dev server.

```console
...
 ✓ Compiled /api/pages-route in 94ms (64 modules)
node_modules/@vercel/og/dist/index.node.js
 ✓ Compiled /api/app-route in 155ms (81 modules)
node_modules/next/dist/compiled/@vercel/og/index.node.js
```

Why do Pages Router and App Router resolve `@vercel/og` differently?

## The behavior with `--turbo` option

Surprisingly, when `--turbo` option is passed, Pages Router also resolves `@vercel/og` to `node_modules/next/dist/compiled/@vercel/og/index.node.js`.

```console
$ npm run dev -- --turbo

> repro-next-vercel-og-resolution@0.1.0 dev
> next dev --turbo

   ▲ Next.js 14.1.3 (turbo)
   - Local:        http://localhost:3000

 ✓ Ready in 601ms
 ✓ Compiled /api/pages-route in 51ms
node_modules/next/dist/compiled/@vercel/og/index.node.js
 ✓ Compiled /api/app-route in 313ms
node_modules/next/dist/compiled/@vercel/og/index.node.js
```
