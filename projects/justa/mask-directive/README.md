# Justa Money Mask Directive

![](https://img.shields.io/bundlephobia/minzip/@justa/mask-directive.svg?style=flat-square) ![](https://img.shields.io/bundlephobia/min/@justa/mask-directive.svg?style=flat-square)

Angular directive to format an input element with _BRL_ money mask (and others - See _prefixSymbol_ prop).

## Install

```bash
npm install --save @justa/mask-directive
```

## Usage

Add the `MaskDirectiveModule` in your `app.module.ts` file in the _inports_ array.

**Money Mask**

Add the `jstMoneyMask` Directive to your input.

## Props

| Props | type | default |
|-------|------|---------|
| hasDecimal | bool | true |
| hasPrefix | bool | false |
| prefixSymbol | string | R$ |

**Document Legal Mask**

Directive only used to format brazilian document (CNPJ/CPF) in a single input

Add the `jstLegalDocumentMask` Directive to your input.
