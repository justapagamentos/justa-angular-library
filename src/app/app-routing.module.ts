import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'control-errors',
    loadChildren: () =>
      import('./demo-control-errors/demo-control-errors.module').then(
        mod => mod.DemoControlErrorsModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
