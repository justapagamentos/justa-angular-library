import {
  Directive,
  forwardRef,
  OnInit,
  OnDestroy,
  Input,
  ElementRef,
  Renderer2,
  HostListener,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import InputMask from 'inputmask';

@Directive({
  selector: '[jstPercentageMask]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PercentageMaskDirective),
      multi: true,
    },
  ],
})
export class PercentageMaskDirective
  implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() percentSuffix = ' %';

  onChange?: (event: any) => void;
  onTouched?: (event: any) => void;

  private mask: any;
  private rendererTimeout?: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.mask = new InputMask({
      alias: 'percentage',
      autoGroup: false,
      autoUnmask: true,
      radixPoint: ',',
      rightAlign: false,
      placeHolder: '0,00',
      numericInput: true,
      digits: 2,
      suffix: this.percentSuffix,
    });
  }

  ngOnInit() {
    this.mask.mask(this.elementRef.nativeElement);
  }

  ngOnDestroy() {
    window.clearTimeout(this.rendererTimeout);
  }

  writeValue(rawValue: any): void {
    const value = parseFloat(rawValue) * 100;
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

  @HostListener('blur', ['$event'])
  onInputBlur(event: any): void {
    const value = parseFloat(event.target.value.replace(',', '.')) / 100;
    this.onChange(value);
  }
}
