import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaskDirectiveModule } from '@justa/mask-directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, MaskDirectiveModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
