import { Component,OnInit } from '@angular/core';
import { DetalleEmpleadoService } from '../services/detalle-empleado.service';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css']
})
export class DetalleEmpleadoComponent implements OnInit {

  constructor(private empleadoService: DetalleEmpleadoService) {}
  ngOnInit(): void {

    this.empleadoService.getEmployee().subscribe( resp => console.log(resp) );
  }




}


