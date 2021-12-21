import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehiculosService } from 'src/app/_services/vehiculos.service';
import { Vehiculo } from '../dominio/vehiculo';

@Component({
  selector: 'app-vista-vehiculos',
  templateUrl: './vista-vehiculos.component.html',
  styleUrls: ['./vista-vehiculos.component.scss']
})
export class VistaVehiculosComponent implements OnInit {
  
  constructor(private _servicioCars:VehiculosService, private router:Router) { }
  vehiculo:Vehiculo = new Vehiculo();
  lst_cars:Vehiculo[] = [];
  visible:boolean = false;
  
  ngOnInit(): void {
    this._servicioCars.getVehiculos().subscribe(response => {
      this.lst_cars = response;
    });
  }

  btnVerCita_Clicked(car: Vehiculo)
  {
    this.router.navigate(['/Vehiculos/MisVehiculos/Citas',JSON.stringify(car)],{skipLocationChange: true});
  }
  AgregarVehiculo()
  {
    this.router.navigate(['/Vehiculos/MisVehiculos/NuevoVehiculo'],{skipLocationChange: true});
  }
  atras()
  {
    sessionStorage.setItem('IdPersona',"1");
    this.router.navigate(['/'],{skipLocationChange: true});
  }
}
