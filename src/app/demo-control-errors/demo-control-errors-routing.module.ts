import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlErrorsPlaygroundComponent } from './control-errors-playground/control-errors-playground.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'playground',
  },
  {
    path: 'playground',
    component: ControlErrorsPlaygroundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoControlErrorsRoutingModule {}
