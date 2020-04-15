import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlErrorsDirective } from './directives/control-errors.directive';
import { defaultErrors, FORM_ERRORS, FormErrorsDi } from './directives/form-errors-di';
import { FormSubmitDirective } from './directives/form-submit.directive';
import { ControlErrorComponent } from './components';
import { ByteFormatPipe } from './pipe/byte-format.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [ControlErrorsDirective, FormSubmitDirective, ControlErrorComponent, ByteFormatPipe],
  exports: [ControlErrorsDirective, FormSubmitDirective, ControlErrorComponent],
  entryComponents: [ControlErrorComponent],
})
export class JstControlErrorsModule {
  static forRoot(config: FormErrorsDi = defaultErrors) {
    return {
      ngModule: JstControlErrorsModule,
      provide: [
        {
          provide: FORM_ERRORS,
          useValue: { ...defaultErrors, ...config },
        },
      ],
    };
  }
}
