import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculosService } from '../_servicios/vehiculos.service';

@Component({
  selector: 'app-anular-cita',
  templateUrl: './anular-cita.page.html',
  styleUrls: ['./anular-cita.page.scss'],
})
export class AnularCitaPage implements OnInit {
  id: any;
  cita: any;
  citaF: any;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,private vehiculosService: VehiculosService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data=>{
        this.id = data.get('id');
        this.vehiculosService.getCita(this.id).subscribe(
          response=>{
            this.cita=response;
            console.log(this.cita);
          },
          error=>{console.log(error);}
        )
      }) 
  }
  
  anular()
  {
    this.citaF = this.cita;
    console.log(this.citaF);
    this.citaF.Estado = 'I';
    this.vehiculosService.postCitaEstado(this.citaF).subscribe(response => {});
    this.router.navigate(['./vehiculos/view/'+this.citaF.IdVehiculo],{skipLocationChange: true});
  }

}
