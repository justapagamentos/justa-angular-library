# @justa/ng-validators ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@justa/ng-validators.svg)

Some _Angular Reactive Forms_ custom validators.

## Install

run `npm install --save @justa/ng-validators`

Install the peerDependecies:

`npm install --save moment @brazilian-utils/validators`

## Examples

Using the validators:

Import `ReactiveFormsModule` in _app.module.ts_

Example with **CNPJ Validator**

```typescript
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { jstValidators } from '@justa/ng-validators';

@Component({
  selector: 'app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.scss'],
})
export class AppFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

    ngOnInit() {
    this.form = this.fb.group({
      field: ['', jstValidators.validateCNPJ],
    });    
    }

}
```

**Example on Stackblitz:**

- [https://stackblitz.com/edit/ng-validators-jst](https://stackblitz.com/edit/ng-validators-jst)

## Available custom validators for controls

- validateDate (format: DD/MM/YYYY)
- validateCNPJ (format: xx.xxx.xxx/xxxx-xx | xxxxxxxxxxxxxx)
- validateCPF (format: xxx.xxx.xxx-xx | xxxxxxxxxxx)
- validatePhone (format: (xx)xxxxx-xxxx | (xx)xxxx-xxxx | xxxxxxxxxx)
- validateURL (format: http[s]://lol.com)

## Available custom validators for FormGroup

- mustMatchMinMaxValue(minControl: string, maxControl: string): void;

### Using Validators for FormGroup

Example:

```typescript
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { jstValidators } from '@justa/ng-validators';

@Component({
  selector: 'app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.scss'],
})
export class AppFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

    ngOnInit() {
    this.form = this.fb.group(
      {
        minValue: [''],
        maxValue: [''],
      },
      {
        validators: [
          jstValidators.mustMatchMinMaxValue('minValue', 'maxValue'),
        ],
      },
    );
    }
}
```


## Build (dev only)

Run `ng build @justa/ng-validators` on project root folder to build the project. The build artifacts will be stored in the `dist/` directory.

To build the package, run `ng build @justa/validators`. (See angular.json to more info about build proccess)

## License

MIT
