import { Directive, Input, OnInit, ElementRef, HostListener } from '@angular/core';
import InputMask from 'inputmask';

/**
 * @deprecated Use `jstCurrencyMask` instead.
 */
@Directive({
  selector: '[jstMoneyMask]',
})
export class MoneyMaskDirective implements OnInit {
  private im: any; // Inputmask ref
  private el: HTMLInputElement; // Ref to the element in the DOM
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

  constructor(private elementRef: ElementRef) {
    // Attach the local variable to the element in the DOM
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
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

  @HostListener('keypress', ['$event'])
  onKeyPress(event) {
    console.log(event);
    if (!this.restrictNumeric(event)) {
      event.preventDefault;
    }
  }

  @HostListener('paste', ['$event']) onPaste(e) {
    this.onInputChange(e);
  }
  @HostListener('change', ['$event']) onChange(e) {
    this.onInputChange(e);
  }
  @HostListener('input', ['$event']) onInput(e) {
    this.onInputChange(e);
  }

  onInputChange(event: any) {
    const eventValue = event;
    const newVal =
      typeof event === 'string' && (eventValue.includes('R$') || eventValue.includes('.'))
        ? eventValue.replace(/\D/gi, '')
        : eventValue;
  }

  restrictNumeric(e): boolean {
    let input;
    if (e.metaKey || e.ctrlKey) {
      return true;
    }
    if (e.which === 32) {
      return false;
    }
    if (e.which === 0) {
      return true;
    }
    if (e.which < 33) {
      return true;
    }
    input = String.fromCharCode(e.which);
    return !!/[\d\s]/.test(input);
  }
}
