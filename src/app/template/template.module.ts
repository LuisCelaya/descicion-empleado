import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { SidemenuModule } from './components/sidemenu/sidemenu.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FooterModule,
    HeaderModule,
    SidemenuModule
  ],
  exports: [
    HeaderModule, FooterModule,SidemenuModule
  ]
})
export class TemplateModule { }
