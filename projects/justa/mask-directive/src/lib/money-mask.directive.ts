import {
  Directive,
  Input,
  OnInit,
  ElementRef,
  HostListener,
  forwardRef,
  Injector,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import InputMask from 'inputmask';

@Directive({
  selector: '[jstMoneyMask]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MoneyMaskDirective),
      multi: true,
    },
  ],
})
export class MoneyMaskDirective implements OnInit {
  private im: any; // Inputmask ref
  private el: HTMLInputElement; // Ref to the element in the DOM
  private control: NgControl;
  @Input() hasDecimal: boolean = false; // Input to set decimals to inputmask obj
  @Input() hasPrefix: boolean = false; // Prefix to insert to the inputmask obj
  @Input() prefixSymbol: string = 'R$ '; // prefix symbol to the inputmask

  private imObject = {
    alias: 'currency',
    autoGroup: true,
    groupSeparator: '.',
    radixPoint: ',',
    rightAlign: false,
    prefix: 'R$ ',
  };

  private get nativeElement() {
    return this.elementRef.nativeElement;
  }

  constructor(private elementRef: ElementRef, private injector: Injector) {
    // Attach the local variable to the element in the DOM
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.control = this.injector.get(NgControl);
    // verify if has prefix. Eg.: R$
    if (this.hasPrefix && this.prefixSymbol) {
      this.imObject['prefix'] = this.prefixSymbol;
    }
    // Verify if has decimal numbers
    if (this.hasDecimal) {
      this.imObject['numericInput'] = true;
    }
    this.im = new InputMask(this.imObject);
    this.im.mask(this.el);
  }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event) {
    this.onInputChange(event);
  }

  onInputChange(event: any) {
    const eventValue = event;
    const newVal =
      typeof event === 'string' && (eventValue.includes('R$') || eventValue.includes('.'))
        ? eventValue.replace(/\D/gi, '')
        : eventValue;

    this.control.valueAccessor.writeValue = newVal;
  }

  getCursorPosition(): number {
    return this.nativeElement.selectionStart;
  }
}
