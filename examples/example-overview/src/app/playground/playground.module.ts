import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlaygroundComponent } from './playground/playground.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { FormsModule } from '@angular/forms';
import { DuoPaneLibraryModule } from 'duo-pane-library';
import { ClipboardDirective } from './directives/clipboard.directive';


@NgModule({
  declarations: [PlaygroundComponent, ControlPanelComponent, ClipboardDirective],
  imports: [
    DuoPaneLibraryModule,
    FormsModule,
    CommonModule,
    PlaygroundRoutingModule
  ]
})
export class PlaygroundModule { }
