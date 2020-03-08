# JST Mask Directives

![](https://img.shields.io/bundlephobia/minzip/@justa/mask-directive.svg?style=flat-square) ![](https://img.shields.io/bundlephobia/min/@justa/mask-directive.svg?style=flat-square)

Justa Pagamentos Angular 2+ Directives! A set of NG2 Directives to improve your forms.

## Install

```bash
npm install --save @justa/mask-directive
```

to use the _money mask_ add the [inputmask](https://www.npmjs.com/package/inputmask) dependency.

```bash
npm install --save @justa/mask-directive inputmask
```

## Usage

Add the `MaskDirectiveModule` in your `app.module.ts` file in the _inports_ array.

## Masks

### Money Mask

Add the `jstMoneyMask` directive to your input.

### Props (inputs)

| Props | type | default |
|-------|------|---------|
| hasDecimal | bool | true |
| hasPrefix | bool | false |
| prefixSymbol | string | R$ |

**Example**

```html
<input jstMoneyMask [hasDecimal]="true" prefixSymbol="$" placeholder="$0.00">
```

### Legal document Mask (Brazil only)

Directive only used to format brazilian document (CNPJ/CPF) in a single input

Add the `jstLegalDocumentMask` Directive to your input.

**Example**

```html
<input jstLegalDocumentMask placeholder="000.000.000-00">
```

## License

MIT @ Justa Pagamentos
