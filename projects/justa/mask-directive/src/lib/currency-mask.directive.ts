import {
  Directive,
  OnInit,
  ElementRef,
  Input,
  HostListener,
  Renderer2,
  OnDestroy,
  forwardRef,
} from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import InputMask from 'inputmask';

@Directive({
  selector: '[jstCurrencyMask]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CurrencyMaskDirective),
      multi: true,
    },
  ],
})
export class CurrencyMaskDirective implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() currencyMultiplier = 100;
  @Input() currencyPrefix = 'R$ ';

  onChange?: (event: any) => void;
  onTouched?: (event: any) => void;

  private rendererTimeout?: number;
  private masker?: any;

  constructor(private elementRef: ElementRef, private renderer: Renderer2, private _control: NgControl) {
    this.masker = new InputMask({
      alias: 'currency',
      autoGroup: true,
      autoUnmask: true,
      groupSeparator: '.',
      radixPoint: ',',
      rightAlign: false,
      placeholder: '0,00',
      numericInput: true,
      prefix: this.currencyPrefix,
    });
  }

  get control(): AbstractControl {
    return this._control.control;
  }

  ngOnInit() {
    this.masker.mask(this.elementRef.nativeElement);
  }

  ngOnDestroy() {
    window.clearTimeout(this.rendererTimeout);
  }

  writeValue(rawValue: string): void {
    const value = parseFloat(rawValue) / this.currencyMultiplier;
    this.rendererTimeout = window.setTimeout(() => {
      this.renderer.setProperty(this.elementRef.nativeElement, 'value', value);
    }, 0);
  }

  registerOnChange(onChange: (event: any) => void): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: (event: any) => void): void {
    this.onTouched = onTouched;
  }

  setDisabledState(isDisabled: boolean): void {
    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
  }

  @HostListener('blur', ['$event'])
  onInputBlur(event: any): void {
    // Inputmask não troca o separador de casas decimais
    const value =
      parseFloat(event.target.value.replace(',', '.')) *
      this.currencyMultiplier;
    this.onChange(value);
  }
}
