---
"eslint-config-grisaia-typescript": patch
"grisaia-package-builder": patch
"eslint-config-grisaia-react": patch
---

Use typescript + esbuild + jest to make configs safe to use. Make shared package `grisaia-package-builder` that handle headache of configuring build process for each package. It will be used by all new packages in future.
