# grisaia-package-builder

## 0.1.1

### Patch Changes

- 6a592cd: Add licence
- 3673e42: Fix build output.

## 0.1.0

### Minor Changes

- e45ace0: Minimum supported eslint version 8.44.2

### Patch Changes

- 7d8262c: Use typescript + esbuild + jest to make configs safe to use. Make shared package `grisaia-package-builder` that handle headache of configuring build process for each package. It will be used by all new packages in future.
- 4b98a64: Do not allow release without passing Test stage.
- bd94a3b: Fix eslint configuration for monorepo
- 7d8262c: Use bun instead of ts-node. It fixes ESM imports issue out of box.
- 5f752df: Output bundle to /dist instead of /dist/lib
