import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoPageRoutingModule } from './two-page-routing.module';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { BookComponent } from './book/book.component';
import { DuoPaneLibraryModule } from 'duo-pane-library';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [FirstPageComponent, SecondPageComponent, BookComponent],
  imports: [
    BrowserAnimationsModule,
    DuoPaneLibraryModule,
    CommonModule,
    TwoPageRoutingModule
  ]
})
export class TwoPageModule { }
