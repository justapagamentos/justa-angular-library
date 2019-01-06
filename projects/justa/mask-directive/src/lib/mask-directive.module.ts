import { NgModule } from '@angular/core';
import { MaskDirectiveComponent } from './mask-directive.component';
import { MoneyMaskDirective } from './money-mask.directive';

@NgModule({
  declarations: [MaskDirectiveComponent, MoneyMaskDirective],
  imports: [
  ],
  exports: [MaskDirectiveComponent]
})
export class MaskDirectiveModule { }
