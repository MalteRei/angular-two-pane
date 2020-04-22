import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoPageRoutingModule } from './two-page-routing.module';
import { BookComponent } from './book/book.component';
import { AngularDuoPaneModule } from 'angular-duo-pane';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [ BookComponent, PagesComponent],
  imports: [
    BrowserAnimationsModule,
    AngularDuoPaneModule,
    CommonModule,
    TwoPageRoutingModule
  ]
})
export class TwoPageModule { }
