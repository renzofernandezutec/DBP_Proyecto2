import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cita } from 'src/app/Citas/dominio/Citas';
import { CitasServiceService } from 'src/app/Citas/servicio/citas-service.service';
import { Vehiculo } from 'src/app/vehiculos/dominio/vehiculo';

@Component({
  selector: 'app-vista-nueva-cita',
  templateUrl: './vista-nueva-cita.component.html',
  styleUrls: ['./vista-nueva-cita.component.scss']
})
export class VistaNuevaCitaComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private citasServicio: CitasServiceService) { }
  car:any;
  cita:Cita = new Cita();
  fecha:string = "";
  hora:string = "";
  motivo:string = "";
  sede:string = "";

  ngOnInit(): void {
    this.car = JSON.parse(this.route.snapshot.params["nuevo"] as string) as Vehiculo;

  }
  CrearCita(){
    if(this.fecha == "" || this.hora == "" || this.motivo == "" || this.sede == "")
    {
      alert("Falta ingresar data");
      return;
    }
    this.cita.IdCliente = this.car.IdCliente;
    this.cita.IdVehiculo = this.car.IdVehiculo;
    this.cita.Fecha = this.fecha;
    this.cita.Hora= this.hora;
    this.cita.Motivo = this.motivo;
    this.cita.Sede= this.sede;
    console.log(this.cita);
    console.log(this.car);

    this.citasServicio.postCita(this.cita).subscribe( response => {});
    alert("Se creo el vehiculo correctamente!");
    this.router.navigate(['/Vehiculos/MisVehiculos/Citas',JSON.stringify(this.car)],{skipLocationChange: true});
  }

  regresar(){
    this.router.navigate(['/Vehiculos/MisVehiculos/Citas',JSON.stringify(this.car)],{skipLocationChange: true});
  }
}
