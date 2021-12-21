import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculosService } from '../_servicios/vehiculos.service';

@Component({
  selector: 'app-nueva-cita',
  templateUrl: './nueva-cita.page.html',
  styleUrls: ['./nueva-cita.page.scss'],
})
export class NuevaCitaPage implements OnInit {
  citaF:any = {};
  fecha:string = "";
  hora:string = "";
  motivo:string = "";
  sede:string = "";

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private _servicios:VehiculosService) { }

  ngOnInit() {
  }

  CrearCita()
  {
    if(this.hora == "" || this.motivo == ""
    || this.sede == "" || this.fecha == "") {
      alert("Existen campos vacios!");
      return;
    }
    this.citaF.Fecha = this.fecha;
    this.citaF.Hora = this.hora;
    this.citaF.Motivo = this.motivo;
    this.citaF.Sede = this.sede;
    this.citaF.IdCliente = sessionStorage.getItem('IdPersona');
    this.citaF.IdVehiculo = sessionStorage.getItem('IdVehiculo');
    this._servicios.postCita(this.citaF).subscribe( response => {
      console.log(response);
      if(response?.Valid > 0){console.log("Cita Creada!")}});
    console.log(this.citaF);
  }  

}
