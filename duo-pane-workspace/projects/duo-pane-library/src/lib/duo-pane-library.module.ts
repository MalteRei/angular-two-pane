import { NgModule } from '@angular/core';
import { DuoPaneLibraryComponent } from './duo-pane-library.component';
import { DuoPaneComponent } from './components/duo-pane/duo-pane.component';
import { DuoPaneDirective } from './directives/duo-pane.directive';



@NgModule({
  declarations: [DuoPaneComponent, DuoPaneDirective],
  imports: [
  ],
  exports: [DuoPaneDirective]
})
export class DuoPaneLibraryModule { }
