# neru

## 1.0.2

### Patch Changes

-   fix: add types export ([#85](https://github.com/ghostdevv/neru/pull/85))

-   Updated dependencies [[`62cc809`](https://github.com/ghostdevv/neru/commit/62cc8095d44a4e62ebc96996e4fde99b44df2991)]:
    -   @nerujs/methods@1.0.3

## 1.0.1

### Patch Changes

-   fix routes option not being optional ([#82](https://github.com/ghostdevv/neru/pull/82))

## 1.0.0

### Major Changes

-   v1 ([#60](https://github.com/ghostdevv/neru/pull/60))

-   only support all handler on it's own in a route handler ([#78](https://github.com/ghostdevv/neru/pull/78))

-   adapters must specify a restrictAllHandler property ([#78](https://github.com/ghostdevv/neru/pull/78))

-   make route handlers have to be uppercase ([#74](https://github.com/ghostdevv/neru/pull/74))

## 0.9.0

### Minor Changes

-   annouce how many routes found ([`1a392de`](https://github.com/ghostdevv/neru/commit/1a392de4e733a87bba254917657a1c0ffa6c8198))

## 0.8.5

### Patch Changes

-   tweak style of announcer ([`0c0c88d`](https://github.com/ghostdevv/neru/commit/0c0c88d2738e30d561aafb37f73edbb788dd802b))

## 0.8.4

### Patch Changes

-   neru announcer ([#50](https://github.com/ghostdevv/neru/pull/50))

*   fix routes not having default ([#51](https://github.com/ghostdevv/neru/pull/51))

-   construct route returns neru formatted copy ([#50](https://github.com/ghostdevv/neru/pull/50))

*   set the default of options.announce to true ([#50](https://github.com/ghostdevv/neru/pull/50))

## 0.8.3

### Patch Changes

-   documentation ([#46](https://github.com/ghostdevv/neru/pull/46))

*   update docs ([#42](https://github.com/ghostdevv/neru/pull/42))

-   add documentation and discord information ([`b00e000`](https://github.com/ghostdevv/neru/commit/b00e0001b25daa44cba74eddc0b45c6cdad305a8))

## 0.8.2

### Patch Changes

-   update pnpm & node ([#44](https://github.com/ghostdevv/neru/pull/44))

-   Updated dependencies [[`78ac286`](https://github.com/ghostdevv/neru/commit/78ac286abe969586d831712d37603eb5dc9ad9ba)]:
    -   @nerujs/methods@1.0.2

## 0.8.1

### Patch Changes

-   switch to totalist ([#39](https://github.com/ghostdevv/neru/pull/39))

*   update documentation ([#41](https://github.com/ghostdevv/neru/pull/41))

## 0.8.0

### Minor Changes

-   base path option ([`e8b6007`](https://github.com/ghostdevv/neru/commit/e8b60075d5393909c56d876abdb9e3c1ae41f205))

*   BREAKING new adapter api ([`03e17ce`](https://github.com/ghostdevv/neru/commit/03e17ce113dda7164715dd7b4cdfaf43ab088c5b))

-   all handler ([#38](https://github.com/ghostdevv/neru/pull/38))

*   add a promise.all to wait for all handlers to add ([#38](https://github.com/ghostdevv/neru/pull/38))

### Patch Changes

-   simplify internal structure ([`9abc865`](https://github.com/ghostdevv/neru/commit/9abc865c5755531db8c4767b70db0e6f59bdbd5b))

*   make routehandlers a map ([`588b362`](https://github.com/ghostdevv/neru/commit/588b3627686f5c789ec974d84aae2eacb4c24b17))

-   move to routehandlers ([`12f8534`](https://github.com/ghostdevv/neru/commit/12f8534d4f3eaaf57c5b11ad8f992e45d578be5c))

*   update exports ([`721ce50`](https://github.com/ghostdevv/neru/commit/721ce50d8ac2c9a0f3be09192311c48d65f35fd9))

-   fix base not stripping trailing slash ([`262e9bc`](https://github.com/ghostdevv/neru/commit/262e9bcebeece075974fd426adec9f9933b6c9b0))

*   rename handlers internally ([`e686b25`](https://github.com/ghostdevv/neru/commit/e686b255366e8bf93c497a2884a9d80606931da8))

-   [BREAKING] removed route class ([`cfb45ac`](https://github.com/ghostdevv/neru/commit/cfb45ac31678214037af81172c5f28649637d320))

*   rename methods to handlers ([`5d582b9`](https://github.com/ghostdevv/neru/commit/5d582b9bbde2bb3f3b1972523e3b7dc16343f4ee))

-   refactor file path reading process ([`30f647f`](https://github.com/ghostdevv/neru/commit/30f647f93caea7f1cc1aa040ea230789d98cd601))

*   move logger to a import and use NERU_DEBUG variable ([`6546d25`](https://github.com/ghostdevv/neru/commit/6546d25a96dbab4a7a8f3f92ef99fdb197fba852))

-   error messages for adapter and server ([`78e21aa`](https://github.com/ghostdevv/neru/commit/78e21aa376195b8b5b850b32ee6aab670c54291a))

## 0.7.1

### Patch Changes

-   remove all ([`f71678b`](https://github.com/ghostdevv/neru/commit/f71678b8446ad74288c9ad06126ea15d34e90e22))

*   switch to express as demo adapter ([`a584731`](https://github.com/ghostdevv/neru/commit/a5847319ab80ae0171d965c15e59bfc71b0d2ce9))

## 0.7.0

### Minor Changes

-   ignore option ([`84ab5e8`](https://github.com/ghostdevv/neru/commit/84ab5e8b8679320d24e0749062591e945dcebd78))

### Patch Changes

-   fix not having default routes ([`29cd04b`](https://github.com/ghostdevv/neru/commit/29cd04b116a2ff491db20f35229301ff1afe2755))

*   remove options property and remove params concept ([`82e104e`](https://github.com/ghostdevv/neru/commit/82e104e62d3efef8a2f1d745b207c6715ffae341))

-   method importer didn't strip non methods ([`067194c`](https://github.com/ghostdevv/neru/commit/067194c3c210cae711d96e6c369e49625ea1a72a))

## 0.6.6

### Patch Changes

-   fix /index being resolved to empty string ([`16e44e2`](https://github.com/ghostdevv/neru/commit/16e44e202ce9e7268458afeb2bfeaf4c2dfddbe1))

*   fix trailing slash not removed when path has index ([`b87e5f7`](https://github.com/ghostdevv/neru/commit/b87e5f7593d5b3e1a965238c6c41ee1738878d50))

-   remove useless classes in favour of functions ([`8b32ee1`](https://github.com/ghostdevv/neru/commit/8b32ee171b0b210cc6cf164fd2eeaca75de4dc73))

*   fix options having a incorrect partial ([`e2f4fa8`](https://github.com/ghostdevv/neru/commit/e2f4fa8babf0ad4d9f40abc948966a4858b4ef90))

-   update deps ([`663d0ba`](https://github.com/ghostdevv/neru/commit/663d0ba46b06f42661bae02dcaf61acab16fe01e))

*   tests overhaull ([`195aeef`](https://github.com/ghostdevv/neru/commit/195aeef646b74af5c09ec0b9301138f1904c7c7f))

-   fix adapter didn't check correct property with formatSpreadRoute ([`141120c`](https://github.com/ghostdevv/neru/commit/141120ca9b8959886915c6f8f3e2ccab73dc69d3))

*   fix paths not being consistantly normalised on windows ([`5cdd4a3`](https://github.com/ghostdevv/neru/commit/5cdd4a34177beff67b717ff7b3cf63ff7bc51c45))

-   fix paths on windows not being imported ([`81a5b8f`](https://github.com/ghostdevv/neru/commit/81a5b8fedb3d6b1b7770e1fb81a53da1f2933bbc))

*   fix directory normalisation slashes not done in right place ([`5b397b8`](https://github.com/ghostdevv/neru/commit/5b397b86cb07cfc897db0d3139b9192bb74e0758))

## 0.6.5

### Patch Changes

-   bb57589: remove custom colour function
-   bb57589: make neru more lightweight
-   Updated dependencies [bb57589]
    -   @nerujs/methods@1.0.1
