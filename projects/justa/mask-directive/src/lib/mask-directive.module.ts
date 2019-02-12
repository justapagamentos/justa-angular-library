import { NgModule } from '@angular/core';
import { MoneyMaskDirective } from './money-mask.directive';

const MASK_DIRECTIVES = [MoneyMaskDirective];

@NgModule({
  declarations: [MASK_DIRECTIVES],
  imports: [],
  exports: [MASK_DIRECTIVES],
})
export class MaskDirectiveModule {}
