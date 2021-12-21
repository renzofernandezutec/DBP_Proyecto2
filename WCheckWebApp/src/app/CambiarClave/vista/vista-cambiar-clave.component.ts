import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/seguridad/dominio/usuario';
import { ClientesMastServicesService } from 'src/app/seguridad/service/clientes-mast-services.service';

@Component({
  selector: 'app-vista-cambiar-clave',
  templateUrl: './vista-cambiar-clave.component.html',
  styleUrls: ['./vista-cambiar-clave.component.scss']
})
export class VistaCambiarClaveComponent implements OnInit {

  constructor(private _servicioLogin: ClientesMastServicesService, private router: Router)
  { }

  cliente:Cliente = new Cliente();
  usuario:string = "";
  clave1:string = "";
  clave2:string = "";

  ngOnInit(): void {
  }
  
  CambiarClave()
  {
    if(this.usuario==""||this.clave1==""|| this.clave2=="")
    { alert("Falta llenar Informacion!"); return;}
    if(this.clave1 != this.clave2)
    { alert("Las claves no coinciden!"); return;}
    

    this.cliente.Usuario = this.usuario;
    this.cliente.Clave = this.clave1;
    console.log(this.cliente);
    this._servicioLogin.postCambiarClave(this.cliente).subscribe( response => {});
    alert("Se cambio la contraseña de manera correcta!");
    this.router.navigate(['/Vehiculos/MisVehiculos/Login'],{skipLocationChange: true});
  }

  Regresar()
  {
    this.router.navigate(['/Vehiculos/MisVehiculos/Login'],{skipLocationChange: true});
  }

}
