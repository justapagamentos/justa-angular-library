import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { formatCnpj, formatCpf } from '@brazilian-utils/formatters';

@Directive({
  selector: '[jstLegalDocumentMask]',
})
export class LegalDocumentMaskDirective implements ControlValueAccessor {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('keyup', ['$event'])
  inputKeyup(event: any): void {
    const value = this.returnValue(event.target.value);
    this.writeValue(value);
    event.target.value = value;
  }

  @HostListener('ionBlur', ['$event'])
  inputOnblur(event: any): void {
    const value = this.returnValue(event.value);
    this.writeValue(value);
    event.value = value;
  }

  @HostListener('ionFocus', ['$event'])
  inputFocus(event: any): void {
    const value = this.returnValue(event.value);
    this.writeValue(value);
    event.value = value;
  }

  writeValue(value: any) {
    this.renderer.setProperty(this.el.nativeElement, 'value', value);
  }

  registerOnChange(val: any): void {
    return;
  }

  registerOnTouched(val: any): void {
    return;
  }

  writeValuePerson(value: string): string {
    if (value.length <= 11) {
      return formatCpf(value);
    }
    return formatCnpj(value);
  }

  returnValue(value: string) {
    const newVal = value ? value.replace(/\D/gi, '') : '';
    return this.writeValuePerson(newVal);
  }
}
