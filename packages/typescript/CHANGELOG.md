# eslint-config-grisaia-typescript

## 0.6.0

### Minor Changes

- e45ace0: Minimum supported eslint version 8.44.2

### Patch Changes

- 037dffb: Fix missing dependencies
- 7d8262c: Use typescript + esbuild + jest to make configs safe to use. Make shared package `grisaia-package-builder` that handle headache of configuring build process for each package. It will be used by all new packages in future.
- 254856a: Add linter
- 4b98a64: Do not allow release without passing Test stage.
- bd94a3b: Fix eslint configuration for monorepo
- 7d8262c: Use bun instead of ts-node. It fixes ESM imports issue out of box.
- 2fa0a77: Fix eslint env. Add licence.
- 7aa3471: Fix eslint version
- b5e5dbe: Test eslint config with jest

## 0.5.0

### Minor Changes

- e2e80b8: Fix npm repository link for all packages

## 0.4.0

### Minor Changes

- f159317: Fix npm repository link

## 0.3.0

### Minor Changes

- 848df0a: Fix provenance by allowing id-token write

## 0.2.0

### Minor Changes

- 0b8082e: add public access config

## 0.1.0

### Minor Changes

- 2bb35d9: Initial release
