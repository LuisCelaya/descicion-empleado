import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleEmpleadoComponent } from './detalle-empleado.component';



@NgModule({
  declarations: [
    DetalleEmpleadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DetalleEmpleadoComponent
  ]
})
export class DetalleEmpleadoModule { }
