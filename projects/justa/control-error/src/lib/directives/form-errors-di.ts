import { InjectionToken } from '@angular/core';
import { ByteFormatPipe } from 'ngx-material-file-input';

const byteFormat = new ByteFormatPipe({ sizeUnit: 'Byte' });

export interface FormErrorsDi {
  required?: (params: any) => any;
  minlength?: (params: any) => any;
  email?: (params: any) => any;
  requiredPattern?: (params: any) => any;
  'Mask error'?: (params: any) => any;
  invalidDate?: (params: any) => any;
  isInvalid?: (params: any) => any;
  mustMatch?: (params: any) => any;
  [key: string]: (params: any) => any;
}

export const defaultErrors = {
  required: error => `Este campo é obrigatório!`,
  minlength: ({ requiredLength, actualLength }) =>
    `Mínimo ${requiredLength} caracteres, valor atual é ${actualLength} caracteres.`,
  'Mask error': error =>
    `O campo informado não corresponde com a máscara! ${error}`,
  email: error => `E-mail inválido!`,
  requiredPattern: error =>
    `O campo informado não corresponde com o padrão informado! ${error}`,
  invalidDate: error => `${error.message} - ${error.expected}`,
  isInvalid: ({ message }) => `${message}`,
  mustMatch: error => `${error}`,
  maxContentSize: ({ actualSize, maxSize }) =>
    `Tamanho nao inválido! Tamanho atual: ${byteFormat.transform(
      actualSize
    )}, esperado: ${byteFormat.transform(maxSize)}`,
  allowedExtensions: () => {
    return `Tipo de arquivo não permitido`;
  }
};

export const FORM_ERRORS = new InjectionToken<FormErrorsDi>('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors
});
