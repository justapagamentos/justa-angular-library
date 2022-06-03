<h1 align="center">Justa Angular Library 🅰️</h1>

> An collection of _Angular Modules_ and _libraries_ used in some applications of the Justa Payments.

## Packages into this monorepo:

| Package        | Description                                                        | Version                                                                             | NPM Link                                                                     | Bundle size                                                                                                   | Status |
| -------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------ |
| mask-directive | Collection of Angular directives to use with input elements        | ![npm (scoped)](https://img.shields.io/npm/v/@justa/mask-directive?color=%23076e95) | [@justa/mask-directive](https://www.npmjs.com/package/@justa/mask-directive) | ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@justa/mask-directive?color=%23076e95) | ✅     |
| ng-validators  | Collection of Angular reactive forms validators                    | ![npm (scoped)](https://img.shields.io/npm/v/@justa/ng-validators?color=%23076e95)  | [@justa/ng-validators](https://www.npmjs.com/package/@justa/ng-validators)   | ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@justa/ng-validators?color=%23076e95)  | ✅     |
| jst-pagination | Angular component that create a pagination interface without drama | ![npm (scoped)](https://img.shields.io/npm/v/@justa/jst-pagination?color=%23076e95) | [@justa/jst-pagination](https://www.npmjs.com/package/@justa/jst-pagination) | ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@justa/jst-pagination?color=%23076e95) | ⚠️     |

**Legends**: ✅ (Active) | ⚠️ (Deprecated)

## Contributing

Clone this repo and install dependencies with [Yarn](http://yarnpkg.org/), after that you can start to help-us to improve these libraries.

All libraries are in the projects/justa folder. Before coding make sure if you are changing the right project and files.

### Develop and build any package

To see all changes across you development run these command to watch all changes:

```bash
ng build @justa/PACKAGE_NAME --watch
```

And to build a package, you can run same command, but without the _watch_ flag:

```bash
ng build @justa/PACKAGE_NAME
```

## License

MIT @ justa.com.vc
