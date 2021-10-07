import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './Component/grid/grid.component';
import { BrowserComponent } from './Component/browser/browser.component';
import { GridviewComponent } from './pages/gridview/gridview.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    BrowserComponent,
    GridviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
