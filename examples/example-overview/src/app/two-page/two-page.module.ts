import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoPageRoutingModule } from './two-page-routing.module';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';


@NgModule({
  declarations: [FirstPageComponent, SecondPageComponent],
  imports: [
    CommonModule,
    TwoPageRoutingModule
  ]
})
export class TwoPageModule { }
