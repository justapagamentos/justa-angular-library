import { NgModule } from '@angular/core';
import { LegalDocumentPipe } from './pipes/legal-document.pipe';
import { UtilitiesComponent } from './utilities.component';

@NgModule({
  declarations: [UtilitiesComponent, LegalDocumentPipe],
  imports: [],
  exports: [UtilitiesComponent, LegalDocumentPipe],
})
export class UtilitiesModule {}
