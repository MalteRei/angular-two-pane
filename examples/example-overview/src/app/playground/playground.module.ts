import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlaygroundComponent } from './playground/playground.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';


@NgModule({
  declarations: [PlaygroundComponent, ControlPanelComponent],
  imports: [
    CommonModule,
    PlaygroundRoutingModule
  ]
})
export class PlaygroundModule { }
