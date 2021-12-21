import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../dominio/usuario';


@Injectable({
  providedIn: 'root'
})
export class ClientesMastServicesService {

  constructor(
    private http: HttpClient
  ) { }

  postLogin(usuario: any) {
    return this.http.post<any>('http://localhost:3000/TL_Login',usuario);
  }
  postCrearUsuario(cliente: Cliente)
  {
    return this.http.post<any>('http://localhost:3000/ClientesMast',cliente);
  }

  postCambiarClave(cliente: Cliente)
  {
    return this.http.post<any>('http://localhost:3000/CambiarClave',cliente);
  }
}
