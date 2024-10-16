This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and has [`nextra`](https://nextra.site/) installed.

## Serve

```bash
npm run dev
```

The dev task will work correctly even on `next@15.0.0-rc.1`.

## Build

```bash
npm run build
```

The build task will fail if `next@15.0.0-rc.1` is installed:

```text
> Build error occurred
TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received undefined
    at join (node:path:1203:7)
    at Object.webpack (file:///Users/dktermun/Documents/GitHub/nextra-next-15-rc1/node_modules/nextra/dist/server/index.js:110:17)
    at getBaseWebpackConfig (/Users/dktermun/Documents/GitHub/nextra-next-15-rc1/node_modules/next/dist/build/webpack-config.js:1850:32)
    at async Promise.all (index 1)
    at async Span.traceAsyncFn (/Users/dktermun/Documents/GitHub/nextra-next-15-rc1/node_modules/next/dist/trace/trace.js:157:20)
    at async webpackBuildImpl (/Users/dktermun/Documents/GitHub/nextra-next-15-rc1/node_modules/next/dist/build/webpack-build/impl.js:138:21)
    at async /Users/dktermun/Documents/GitHub/nextra-next-15-rc1/node_modules/next/dist/build/index.js:1060:73
    at async Span.traceAsyncFn (/Users/dktermun/Documents/GitHub/nextra-next-15-rc1/node_modules/next/dist/trace/trace.js:157:20)
    at async build (/Users/dktermun/Documents/GitHub/nextra-next-15-rc1/node_modules/next/dist/build/index.js:345:9) {
  code: 'ERR_INVALID_ARG_TYPE'
}
```