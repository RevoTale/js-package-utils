# grisaia-package-builder

## 0.1.15

### Patch Changes

- a0d5d9b: Add glob as a prod deps
- 5513cd4: Fix missing glob

## 0.1.14

### Patch Changes

- 848dd9f: Fix missing glob

## 0.1.13

### Patch Changes

- 18b7032: Organiation renamed.
- 18b7032: Packages upgraded.

## 0.1.12

### Patch Changes

- 8f1b9a9: fix bundle preparation

## 0.1.11

### Patch Changes

- 5f1fa42: Fix CI `build` script duplicate calls

## 0.1.10

### Patch Changes

- 1613f9f: Fix npm automatically converts binary to commonjs

## 0.1.9

### Patch Changes

- c2b1b67: Package builder used as binary
- c2b1b67: Use ESM for cli

## 0.1.9

### Patch Changes

- 3cc42b9: Package builder used as binary

## 0.1.9

### Patch Changes

- 540371a: Package builder used as binary

## 0.1.9

### Patch Changes

- e766506: Fix binary cli
- e8f5059: Package builder used as binary
- e766506: Fix binary alias
- e766506: Fix dependencies used in binary

## 0.1.8

### Patch Changes

- 8797afa: Fix binary cli
- 8797afa: Fix binary alias

## 0.1.7

### Patch Changes

- 1d7d921: Fix binary cli

## 0.1.6

### Patch Changes

- e28aab5: Speed up CI execution time

## 0.1.5

### Patch Changes

- e20f4c0: Monorepo renamed to js-package-utils
- bd86f46: Make source maps optional

## 0.1.4

### Patch Changes

- 3f5b775: Fix packages cannot be released.

## 0.1.3

### Patch Changes

- 68e6856: fix a build script do not run before release

## 0.1.2

### Patch Changes

- 2070b54: Fix wrong directory released.

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
