import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  menus = [
    {
      name: 'inicio',
      path: '',
      icon: 'home',
    },
    {
      name: 'Detalle Empleado',
      path: 'detalle_empleado',
      icon: 'settings_accessibility',
    },
  ];



  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {}

  goHome() {
    this.router.navigate(['']);
  }
  goDetalle() {
    this.router.navigate(['detalle_empleado']);
  }

}
