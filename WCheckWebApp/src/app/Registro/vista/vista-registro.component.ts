import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/seguridad/dominio/usuario';
import { ClientesMastServicesService } from 'src/app/seguridad/service/clientes-mast-services.service';

@Component({
  selector: 'app-vista-registro',
  templateUrl: './vista-registro.component.html',
  styleUrls: ['./vista-registro.component.scss']
})
export class VistaRegistroComponent implements OnInit {

  constructor(private _servicioLogin: ClientesMastServicesService, private router: Router)
  {}
  cliente:Cliente = new Cliente();
  nombre:string = "";
  numeroDocumento:string = "";
  telefono:string = "";
  usuario:string = "";
  clave1:string = "";
  clave2:string = "";

  ngOnInit(): void {
  }

  CrearCuenta()
  {
    if(this.nombre==""||this.numeroDocumento==""|| this.telefono=="")
    { alert("Falta llenar Informacion!"); return;}
    if(this.usuario==""||this.clave1==""|| this.clave2=="")
    { alert("Falta llenar Informacion!"); return;}
    if(this.clave1 != this.clave2)
    { alert("Las claves no coinciden!"); return;}
    
    this.cliente.Nombre = this.nombre;
    this.cliente.TipoDocumento = "DNI";
    this.cliente.NumeroDocumento = this.numeroDocumento;
    this.cliente.Telefono = this.telefono;
    this.cliente.Usuario = this.usuario;
    this.cliente.Clave = this.clave1;
    this._servicioLogin.postCrearUsuario(this.cliente).subscribe( response => {});
    alert("El usuario se creo de manera correcta!");
    this.router.navigate(['/Vehiculos/MisVehiculos/Login'],{skipLocationChange: true});
  }
  Regresar()
  {
    this.router.navigate(['/Vehiculos/MisVehiculos/Login'],{skipLocationChange: true});
  }

}
