import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculosService } from '../_servicios/vehiculos.service';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.page.html',
  styleUrls: ['./crear-cuenta.page.scss'],
})
export class CrearCuentaPage implements OnInit {
  usuarioF:any = {};
  nombre:string = "";
  numeroDocumento:string = "";
  telefono:string = "";
  usuario:string = "";
  clave1:string = "";
  clave2:string = "";
  URL:string = "";

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private _servicios:VehiculosService) { }
   
  ngOnInit() {
  }

  CrearCuenta()
  {
    if(this.clave1 != this.clave2)
    {alert("Las claves no coinciden!");
    return;}
    if(this.nombre == "" || this.numeroDocumento == ""
    || this.telefono == "" || this.usuario == "") {
      alert("Existen campos vacios!");
      return;
    }
    this.usuarioF.Nombre = this.nombre;
    this.usuarioF.TipoDocumento = "DNI";
    this.usuarioF.NumeroDocumento = this.numeroDocumento;
    this.usuarioF.Telefono = this.telefono;
    this.usuarioF.Usuario = this.usuario;
    this.usuarioF.Clave = this.clave1;
    this._servicios.postCrearUsuario(this.usuarioF).subscribe( response => {
      console.log(response);
      if(response?.Valid > 0){console.log("Usuario Creado!")}});
    console.log(this.usuarioF);
  }  

}
