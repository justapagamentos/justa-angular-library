# Utilities

![npm (scoped)](https://img.shields.io/npm/v/@justa/utilities?color=%23076e95) 
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@justa/utilities?color=%23076e95) 

A serie of utilities for angular applications, like:

- LegalDocumentPipe: Format


## Install 

    npm install --save @justa/utilities

## Usage

*LegalDocumentPipe*

Add the `legalDocumentPipe` to the module of your application, like `app.module.ts`:

    import { LegalDocumentPipe } from '@justa/utilities';

Then add the imported pipe to the @NgModule declaration of the component which you are using in, like:

    @NgModule({
      declarations: [LegalDocumentPipe]
    })

Now you can use the `legalDocumentPipe` like a regular pipe in wherever tag you want
