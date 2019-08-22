import { Pipe, PipeTransform } from '@angular/core';
import { formatCnpj, formatCpf } from '@brazilian-utils/formatters';
@Pipe({
  name: 'legalDocument',
})
export class LegalDocumentPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const valueFormated = value ? value.replace(/\D/gi, '') : '';
    if (valueFormated.length === 11) {
      return formatCpf(valueFormated);
    } else {
      return formatCnpj(valueFormated);
    }
  }
}
