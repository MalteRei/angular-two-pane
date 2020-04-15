import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterDetailRoutingModule } from './master-detail-routing.module';
import { MasterComponent } from './master/master.component';
import { DetailComponent } from './detail/detail.component';
import { MasterDetailIconComponent } from './icons/master-detail-icon/master-detail-icon.component';
import { CloseIconComponent } from './icons/close-icon/close-icon.component';
import { MasterDetailComponent } from './master-detail/master-detail.component';


@NgModule({
  declarations: [MasterComponent, DetailComponent, MasterDetailIconComponent, CloseIconComponent, MasterDetailComponent],
  imports: [
    CommonModule,
    MasterDetailRoutingModule
  ]
})
export class MasterDetailModule { }
