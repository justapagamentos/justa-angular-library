import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DemoControlErrorsRoutingModule } from './demo-control-errors-routing.module';
import { ControlErrorsPlaygroundComponent } from './control-errors-playground/control-errors-playground.component';
import { JstControlErrorsModule } from 'projects/justa/control-error/src/public_api';

@NgModule({
  declarations: [ControlErrorsPlaygroundComponent],
  imports: [
    CommonModule,
    DemoControlErrorsRoutingModule,
    JstControlErrorsModule,
    ReactiveFormsModule,
  ],
})
export class DemoControlErrorsModule {}
