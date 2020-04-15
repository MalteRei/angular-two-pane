import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterDetailModule } from './master-detail/master-detail.module';
import { DuoPaneLibraryModule} from 'duo-pane-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DuoPaneLibraryModule,
    BrowserModule,
    MasterDetailModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
