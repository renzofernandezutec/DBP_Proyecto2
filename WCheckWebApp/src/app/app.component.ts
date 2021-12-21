import { Component, OnInit } from '@angular/core';
import { VehiculosService } from './_services/vehiculos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WCheckWebApp';
  constructor(private _servicioVehiculo: VehiculosService)
  {}
  ngOnInit() {
    this.listadoVehiculos();
  }
  listadoVehiculos() {
    return this._servicioVehiculo.getVehiculos().subscribe(
      response => {});
  }

}

