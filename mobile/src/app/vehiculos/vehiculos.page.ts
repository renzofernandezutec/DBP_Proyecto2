import { Component, OnInit } from '@angular/core';
import {VehiculosService} from '../_servicios/vehiculos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.page.html',
  styleUrls: ['./vehiculos.page.scss'],
})
export class VehiculosPage implements OnInit {
  vehiculos: any[]=[];

  constructor(private vehiculosService:VehiculosService) { }
  
  ngOnInit() {
    this.vehiculosService.getVehiculos().subscribe(data => {
      this.vehiculos = data;
      console.log(this.vehiculos);
    })
  }

}
