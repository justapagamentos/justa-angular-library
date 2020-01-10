import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";
import {
  isValidCnpj,
  isValidCpf,
  isValidPhone
} from "@brazilian-utils/validators";
import * as Moment from "moment";
import { groupOfAllowed, groupOfNotAllowed, urlPattern } from "./regexList";

interface InvalidContent {
  expected: boolean;
  message: string;
}

const moment = Moment;

/**
 * @description remove all non digits caracters
 */
function removeNonDigits(data: string): string {
  return data.replace(/\D/g, "");
}

/**
 * @description validateCNPJ for FormBuilder
 */
function validateCNPJ(control: AbstractControl): ValidationErrors | null {
  const controlValue = control.value;
  return !isValidCnpj(removeNonDigits(controlValue))
    ? { isInvalid: { expected: true, message: "Número de CNPJ inválido." } }
    : null;
}

/**
 * @description validateCPF for FormBuilder
 */
function validateCPF(control: AbstractControl): ValidationErrors | null {
  const controlValue = control.value;
  return !isValidCpf(removeNonDigits(controlValue))
    ? { isInvalid: { expected: true, message: "Número de CPF inválido." } }
    : null;
}

/**
 * @description valicação de data seguindo modelo do FormBuilder
 */
function validateDate(control: AbstractControl) {
  const value = control.value;
  const valueOnlyNumbers = value.replace(/[^0-9]/g, "");

  if (valueOnlyNumbers.length >= 8) {
    const date = moment(value, "DD/MM/YYYY");

    if (date.year()) {
      const year = date.year().toString();
      const validateYear = (year: string) => /(?:(?:19|20)[0-9]{2})/.test(year);

      if (validateYear(year)) {
        return null;
      }
    }
  }

  return { message: "Data inválida." };
}

/**
 * @description validacao para numeros de telefone do FormBuilder
 */
function validatePhone(control: AbstractControl): ValidationErrors | null {
  const controlValue = control.value;
  return !isValidPhone(controlValue)
    ? { isInvalid: { expected: true, message: "Número inválido." } }
    : null;
}

/**
 * @description validateURL for FormBuilder
 */
function validateURL(control: AbstractControl): ValidationErrors | null {
  const controlValue = control.value;
  return !urlPattern.test(controlValue)
    ? { isInvalid: { expected: true, message: "URL Inválida." } }
    : null;
}

/**
 * @description Provide a validator for key text that do not accept special characters or spaces
 */
function validateTextKey(control: AbstractControl): ValidationErrors | null {
  const controlValue = control.value;

  let match: any;

  match = controlValue.match(groupOfAllowed);

  // tslint:disable-next-line: curly
  if (!match) match = controlValue.match(groupOfNotAllowed);

  const contentWhenInvalid: InvalidContent = {
    expected: true,
    // tslint:disable-next-line: quotemark
    message: "Não é permitido caracteres especiais ou espaços neste campo"
  };

  return match ? { isInvalid: contentWhenInvalid } : null;
}

/**
 * @description Provide a validator to compare two values on a FormGroup based on min/max value
 * @example mustMatchMinMaxValue('controlMinValue', 'controlMaxValue')
 */
export function mustMatchMinMaxValue(
  controlName: string,
  matchControlName: string,
): (formGroup: FormGroup) => void {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchControlName];
    const controlValue =
      control.value && typeof control.value === 'string'
        ? Number(control.value.replace(/\W/gi, ''))
        : control.value;
    const matchingControlValue =
      matchingControl.value && typeof matchingControl.value === 'string'
        ? Number(matchingControl.value.replace(/\W/gi, ''))
        : matchingControl.value;

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return;
    }

    // set new error
    if (matchingControlValue < controlValue) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

export const jstValidators = {
  validateDate,
  validateCNPJ,
  validateCPF,
  validatePhone,
  validateURL,
  validateTextKey,
  mustMatchMinMaxValue,
};
