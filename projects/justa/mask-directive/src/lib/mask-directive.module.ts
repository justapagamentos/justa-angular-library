import { NgModule } from '@angular/core';
import { MoneyMaskDirective } from './money-mask.directive';
import { LegalDocumentMaskDirective } from './legal-document-mask.directive';

const MASK_DIRECTIVES = [MoneyMaskDirective, LegalDocumentMaskDirective];

@NgModule({
  declarations: [...MASK_DIRECTIVES],
  imports: [],
  exports: [...MASK_DIRECTIVES],
})
export class MaskDirectiveModule {}
