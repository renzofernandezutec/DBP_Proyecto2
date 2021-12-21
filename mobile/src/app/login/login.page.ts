import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehiculosService } from '../_servicios/vehiculos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private _servicioLogin:VehiculosService, private router: Router) { }

  ngOnInit() {
  }

  usuario:any = {};
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
        this.router.navigate(['/vehiculos/'],{skipLocationChange: true});
      }
      else{
        alert("Usuario y o contraseña incorrecto!");
      }
    });
  }


}
