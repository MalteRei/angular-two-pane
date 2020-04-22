import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterDetailModule } from './master-detail/master-detail.module';
import { TwoPageModule } from './two-page/two-page.module';
import { PlaygroundModule } from './playground/playground.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PlaygroundModule,
    TwoPageModule,
    MasterDetailModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
