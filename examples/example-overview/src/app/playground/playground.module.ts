import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlaygroundComponent } from './playground/playground.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { FormsModule } from '@angular/forms';
import { AngularDuoPaneModule } from 'angular-duo-pane';
import { ClipboardDirective } from './directives/clipboard.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LiveCodeComponent } from './live-code/live-code.component';
import { CopyButtonComponent } from './copy-button/copy-button.component';
import { SecondaryPlaygroundNinjaCatComponent } from './secondary-playground-ninja-cat/secondary-playground-ninja-cat.component';


@NgModule({
  declarations: [PlaygroundComponent, ControlPanelComponent, ClipboardDirective, LiveCodeComponent, CopyButtonComponent, SecondaryPlaygroundNinjaCatComponent],
  imports: [
    BrowserAnimationsModule,
    AngularDuoPaneModule,
    FormsModule,
    CommonModule,
    PlaygroundRoutingModule
  ]
})
export class PlaygroundModule { }
