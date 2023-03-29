import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AlumnosComponent } from './alumnos/alumnos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlumnosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
