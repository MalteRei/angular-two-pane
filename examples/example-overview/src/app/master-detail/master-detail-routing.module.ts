import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './master/master.component';
import { DetailComponent } from './detail/detail.component';
import { MasterDetailComponent } from './master-detail/master-detail.component';


const routes: Routes = [
  {
    path: 'overview',
    component: MasterDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterDetailRoutingModule { }
