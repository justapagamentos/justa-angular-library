import { Directive, ElementRef, HostListener, Renderer2, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { formatCpf, formatCnpj } from './utils';

@Directive({
  selector: '[jstLegalDocumentMask]',
})
export class LegalDocumentMaskDirective implements ControlValueAccessor, OnDestroy, OnInit {
  onChange = (value: any) => {};
  onTouched = () => {};

  writeTimeout: any;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private _control: NgControl,
    ) {}

  ngOnInit(): void {
    const unformattedValue = this.el.nativeElement.value;
    if(unformattedValue && unformattedValue.length > 0) {
      const value = this.returnValue(unformattedValue);
      this.writeValue(value);
    }
  }

  ngOnDestroy() {
    clearTimeout(this.writeTimeout);
  }

  get control() {
    return this._control.control;
  }

  @HostListener('keyup', ['$event'])
  inputKeyup(event: any): void {
    const value = this.returnValue(event.target.value);
    this.writeValue(value);
    event.target.value = value;
  }

  /**
   * @deprecated This method for Ionic inputs will be deprecated in the next
   * minor version.
   */
  @HostListener('ionBlur', ['$event'])
  inputOnblur(event: any): void {
    const value = this.returnValue(event.value);
    this.writeValue(value);
    event.value = value;
    console.warn('This directive won\'t work more in Ionic into next minor version!');
  }

    /**
   * @deprecated This method for Ionic inputs will be deprecated in the next
   * minor version.
   */
  @HostListener('ionFocus', ['$event'])
  inputFocus(event: any): void {
    const value = this.returnValue(event.value);
    this.writeValue(value);
    event.value = value;
    console.warn('This directive won\'t work more in Ionic into next minor version!');
  }

  @HostListener('focus', ['$event'])
  focusInput(event: any): void {
    const value = this.returnValue(event.target.value);
    this.writeValue(value);
    event.target.value = value;
  }

  @HostListener('blur', ['$event'])
  blurInput(event: any): void {
    const value = this.returnValue(event.target.value);
    this.writeValue(value);
    event.target.value = value;
  }

  @HostListener('ngModelChange', ['$event'])
  ngModelChangeInput(event: any): void {
    const value = this.returnValue(event);
    this.writeValue(value);
  }


  writeValue(value: any) {
    this.writeTimeout = setTimeout(() => {
      this.renderer.setProperty(this.el.nativeElement, 'value', value);
    }, 1);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onChange = fn;
  }

  private writeValuePerson(value: string): string {
    if (value.length <= 11) {
      return formatCpf(value);
    }
    return formatCnpj(value);
  }

  private returnValue(value: string) {
    const newVal = value ? value.replace(/\D/gi, '') : '';
    return this.writeValuePerson(newVal);
  }
}
