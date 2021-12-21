import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cita } from 'src/app/Citas/dominio/Citas';
import { CitasServiceService } from 'src/app/Citas/servicio/citas-service.service';


@Component({
  selector: 'app-vista-anular-cita',
  templateUrl: './vista-anular-cita.component.html',
  styleUrls: ['./vista-anular-cita.component.scss']
})
export class VistaAnularCitaComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private citasServicio:CitasServiceService) { }
  citaF:Cita = new Cita();
  cita:any;
  ngOnInit(): void {
  this.cita = JSON.parse(this.route.snapshot.params["anular"] as string) as Cita;
  console.log(this.cita);
  }
  regresar()
  {
    this.router.navigate(['/Vehiculos/MisVehiculos/Listado'],{skipLocationChange: true});
  }
  anular() {
    this.citaF.IdCita = this.cita.IdCita;
    this.citaF.Estado = 'I';
    this.citasServicio.postCitaEstado(this.citaF).subscribe(response => {});
    this.router.navigate(['/Vehiculos/MisVehiculos/Listado'],{skipLocationChange: true});
  }

}
