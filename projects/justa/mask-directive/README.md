# JST Mask Directives

![](https://img.shields.io/bundlephobia/minzip/@justa/mask-directive.svg?style=flat-square) ![](https://img.shields.io/bundlephobia/min/@justa/mask-directive.svg?style=flat-square)

Justa Pagamentos Angular 2+ Directives! A set of NG2 Directives to improve your forms.

## Install

```bash
npm install --save @justa/mask-directive inputmask
```

## Usage

Add the `MaskDirectiveModule` in your `app.module.ts` file in the _imports_ array.

## Masks

### Money Mask (Deprecated)

> *Deprecated*: This directive is deprecated. For Brazilian Real, use the Currency Mask (`jstCurrencyMask`) instead.

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

### Currency Mask (Brazil only)

Directive to format currency inputs. The form control value automatically is mutiplied/divided
by `currencyMultiplier` before rendering/after keyboard input.

#### Props (inputs)

| Prop | type | default |
|------|------|---------|
| currencyMultiplier | number | 100 |
| currencySuffix | string | 'R$ ' | 

**Example**

Add the `jstCurrencyMask` directive to your input:

```html
<input jstCurrencyMask formControlName="value">
```

### Percentage mask

Directive to format percentage inputs. The form control value is always between
0 and 1.

#### Props (inputs)

| Prop | type | default |
|------|------|---------|
| percentageSuffix | string | ' %' |

**Example**

Add the `jstPercentageMask` directive to your input:

```html
<input jstPercentageMask formControlName="value">
```

## License

MIT @ Justa Pagamentos
