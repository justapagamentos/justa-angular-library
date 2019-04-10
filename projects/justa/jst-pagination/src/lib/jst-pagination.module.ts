import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { JstPaginationComponent } from './jst-pagination/jst-pagination.component';

@NgModule({
  declarations: [JstPaginationComponent],
  imports: [BrowserModule, CommonModule],
  exports: [JstPaginationComponent],
})
export class JstPaginationModule {}
