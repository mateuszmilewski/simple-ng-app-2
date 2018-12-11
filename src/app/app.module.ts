
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AutoComponentComponent } from './auto-component/auto-component.component';

@NgModule({
  declarations: [
    ListComponent,
    AppComponent,
    AutoComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ListComponent, AppComponent, AutoComponentComponent]
})
export class AppModule { }
