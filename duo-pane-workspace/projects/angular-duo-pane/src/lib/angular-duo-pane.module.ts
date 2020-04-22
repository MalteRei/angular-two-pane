import { NgModule } from '@angular/core';
import { DuoPaneComponent, DuoPaneDirective } from 'duo-pane-library';



@NgModule({
  declarations: [DuoPaneComponent, DuoPaneDirective],
  imports: [
  ],
  exports: [DuoPaneDirective, DuoPaneComponent]
})
export class AngularDuoPaneModule { }
