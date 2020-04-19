import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterDetailRoutingModule } from './master-detail-routing.module';
import { MasterComponent } from './master/master.component';
import { DetailComponent } from './detail/detail.component';
import { MasterDetailIconComponent } from './icons/master-detail-icon/master-detail-icon.component';
import { MasterDetailComponent } from './master-detail/master-detail.component';
import { DuoPaneLibraryModule} from 'duo-pane-library';
import { TwoPageIconComponent } from './icons/two-page-icon/two-page-icon.component';
import { DualScreenIconComponent } from './icons/dual-screen-icon/dual-screen-icon.component';


@NgModule({
  declarations: [MasterComponent, DetailComponent, MasterDetailIconComponent, MasterDetailComponent, TwoPageIconComponent, DualScreenIconComponent],
  imports: [
    DuoPaneLibraryModule,
    CommonModule,
    MasterDetailRoutingModule
  ]
})
export class MasterDetailModule { }
