import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaskDirectiveModule } from '@justa/mask-directive';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MaskDirectiveModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
