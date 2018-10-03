import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
  RouterModule.forRoot([
    {"path":"search",loadChildren:"@enterprise-ng-app-poc/client-search"}
  ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
