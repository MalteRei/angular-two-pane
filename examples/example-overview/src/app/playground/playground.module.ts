import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularDuoPaneModule } from 'angular-duo-pane';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { CopyButtonComponent } from './copy-button/copy-button.component';
import { ClipboardDirective } from './directives/clipboard.directive';
import { LiveCodeComponent } from './live-code/live-code.component';
import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlaygroundComponent } from './playground/playground.component';
import { SecondaryPlaygroundNinjaCatComponent } from './secondary-playground-ninja-cat/secondary-playground-ninja-cat.component';



@NgModule({
  declarations: [
    PlaygroundComponent,
    ControlPanelComponent,
    ClipboardDirective,
    LiveCodeComponent,
    CopyButtonComponent,
    SecondaryPlaygroundNinjaCatComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AngularDuoPaneModule,
    FormsModule,
    CommonModule,
    PlaygroundRoutingModule
  ]
})
export class PlaygroundModule { }
