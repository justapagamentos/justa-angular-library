import { Directive, Input, OnInit, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import InputMask from 'inputmask';

@Directive({
  selector: '[jstMoneyMask]',
})
export class MoneyMaskDirective implements OnInit, OnChanges {
  private im: any; // Inputmask ref
  private el: HTMLInputElement; // Ref to the element in the DOM
  @Input() hasDecimal: boolean = true; // Input to set decimals to inputmask obj
  @Input() hasPrefix: boolean = false; // Prefix to insert to the inputmask obj

  private imObject = {
    alias: 'decimal',
    autoGroup: true,
    groupSeparator: '.',
    radixPoint: ',',
    rightAlign: false,
    placeholder: '0,00',
  };

  constructor(private elementRef: ElementRef) {
    // Attach the local variable to the element in the DOM
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    let newInObject;
    if (this.hasPrefix) {
      newInObject = { ...this.imObject, prefix: 'R$ ', placeholder: 'R$ 0,00' };
    } else {
      newInObject = this.imObject;
    }
    if (this.hasPrefix) {
      newInObject = { ...this.imObject, numericInput: true };
    } else {
      newInObject = this.imObject;
    }
    this.im = new InputMask(newInObject);
    this.im.mask(this.el);
  }

  ngOnChanges(changes: SimpleChanges) {}
}
