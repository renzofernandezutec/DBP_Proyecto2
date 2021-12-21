import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculosService } from 'src/app/_servicios/vehiculos.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  id: any;
  citas: any[] = [];
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,private vehiculosService: VehiculosService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data=>{
        this.id = data.get('id');
        this.vehiculosService.getCitas(this.id).subscribe(
          response=>{
            this.citas=response;
            console.log(this.citas);
          },
          error=>{console.log(error);}
        )
      })
  }

  BtnAnular(cita:any) {
  console.log(cita);
  }

  btnNuevo()
  {
    sessionStorage.setItem('IdVehiculo',this.id);
    console.log(sessionStorage.getItem('IdVehiculo'));
    this.router.navigate(['/nueva-cita/'],{skipLocationChange: true});

  }

}
