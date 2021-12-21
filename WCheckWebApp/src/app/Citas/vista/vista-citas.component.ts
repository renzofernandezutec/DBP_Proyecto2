import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehiculo } from 'src/app/vehiculos/dominio/vehiculo';
import { CitasServiceService } from '../servicio/citas-service.service';
import {Cita} from '../dominio/Citas'
@Component({
  selector: 'app-vista-citas',
  templateUrl: './vista-citas.component.html',
  styleUrls: ['./vista-citas.component.scss']
})
export class VistaCitasComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private citasServicio: CitasServiceService) { }
  lst_Citas:Cita[] = [];
  cita:Cita = new Cita();
  car:any;
  ngOnInit(): void {
  this.car = JSON.parse(this.route.snapshot.params["ver"] as string) as Vehiculo;
  this.citasServicio.getCitas(this.car.IdVehiculo).subscribe(response => {
    this.lst_Citas = response;
  });
  }
  atras()
  {
    this.router.navigate(['/Vehiculos/MisVehiculos/Listado'],{skipLocationChange: true});
  }
  AgregarCita()
  {
    // sessionStorage.setItem('IdVehiculo',String(this.car.IdVehiculo));
    this.router.navigate(['/Vehiculos/MisVehiculos/NuevaCita',JSON.stringify(this.car)],{skipLocationChange: true});
  }
  BtnAnular(cita:Cita){
    this.router.navigate(['/Vehiculos/MisVehiculos/AnularCita',JSON.stringify(cita)],{skipLocationChange: true});
  }

}
