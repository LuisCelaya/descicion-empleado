import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateModule } from './template/template.module';
import { SidemenuModule } from './template/components/sidemenu/sidemenu.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSlideToggleModule,
    TemplateModule,
    BrowserAnimationsModule,
    SidemenuModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
