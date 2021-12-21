import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor(
    private http: HttpClient
  ) { }
  getVehiculos() {
    return this.http.get<any[]>('http://localhost:3000/TL_VehiculosMast?IdCliente='+sessionStorage.getItem('IdPersona'));
    // return this.http.get<any[]>('http://localhost:3000/TL_VehiculosMast?IdCliente=1');
  }
  getCitas(idVehiculo:number) {
    return this.http.get<any[]>('http://localhost:3000/TL_Citas?IdVehiculo='+idVehiculo);
  }
  getCita(idCita:number) {
    return this.http.get<any[]>('http://localhost:3000/TL_Cita?IdCita='+idCita);
  }
  postCita(cita: any) {
    return this.http.post<any>('http://localhost:3000/TL_Citas',cita);
  }
  postCitaEstado(cita: any) {
  return this.http.post<any>('http://localhost:3000/TL_CitasEstado',cita);
  }
  postLogin(usuario: any) {
    return this.http.post<any>('http://localhost:3000/TL_Login',usuario);
  }
  postCrearUsuario(cliente: any)
  {
    return this.http.post<any>('http://localhost:3000/ClientesMast',cliente);
  }
  
}
