import { Component, OnInit } from '@angular/core';
import { ClientesMastServicesService } from '../service/clientes-mast-services.service';
import {Usuario} from '../dominio/usuario';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _servicioLogin: ClientesMastServicesService, private router: Router)
  { }

  ngOnInit(): void {
  }
  usuario:Usuario = new Usuario();
  username:string = "";
  password:string = "";
  
  login(){
    if(this.username == "" || this.password == "") {
      alert("El usuario o contraseña esta vacio!");
      return;
    }

    this.usuario.Usuario = this.username;
    this.usuario.Clave = this.password;
    
    this._servicioLogin.postLogin(this.usuario).subscribe( response => {
      if(response?.Valid > 0)
      { 
        sessionStorage.setItem('IdPersona',response.Valid);
        this.router.navigate(['/Vehiculos/MisVehiculos/Listado'],{skipLocationChange: true});
      }
      else{
        alert("Usuario y o contraseña incorrecto!");
      }
    });
  }

  Registrarse()
  { 
    this.router.navigate(['/Vehiculos/MisVehiculos/Registro'],{skipLocationChange: true});
  }

  CambiarClave()
  {
    this.router.navigate(['/Vehiculos/MisVehiculos/CambiarClave'],{skipLocationChange: true});

  }
}
