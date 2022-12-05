import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleEmpleadoComponent } from './paginas/detalle-empleado/detalle-empleado.component';
import { InicioComponent } from './paginas/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'detalle_empleado',
    component: DetalleEmpleadoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
