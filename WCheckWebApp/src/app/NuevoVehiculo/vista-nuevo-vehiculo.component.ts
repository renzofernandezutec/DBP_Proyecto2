import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculo } from '../vehiculos/dominio/vehiculo';
import { VehiculosService } from '../_services/vehiculos.service';

@Component({
  selector: 'app-vista-nuevo-vehiculo',
  templateUrl: './vista-nuevo-vehiculo.component.html',
  styleUrls: ['./vista-nuevo-vehiculo.component.scss']
})
export class VistaNuevoVehiculoComponent implements OnInit {

  constructor(private _servicioVehiculo:VehiculosService, private router: Router) { }
  vehiculo:Vehiculo = new Vehiculo();
  marca:string = "";
  modelo:string = "";
  year:number = 0;

  ngOnInit(): void {
  }

  crearVehiculo()
  {
    if(this.marca == "" || this.modelo == "" || this.year == null)
    {
      alert("Falta ingresar data");
      return;
    }
    this.vehiculo.IdCliente = Number(sessionStorage.getItem('IdPersona'));
    this.vehiculo.Marca = this.marca;
    this.vehiculo.Modelo = this.modelo;
    this.vehiculo.Year = this.year;
    this._servicioVehiculo.postVehiculo(this.vehiculo).subscribe( response => {});
    alert("Se creo el vehiculo correctamente!");
    this.router.navigate(['/Vehiculos/MisVehiculos/Listado'],{skipLocationChange: true});
  }
  
  regresar()
  {
    console.log("AAA");
    this.router.navigate(['/Vehiculos/MisVehiculos/Listado'],{skipLocationChange: true});
  }

}
