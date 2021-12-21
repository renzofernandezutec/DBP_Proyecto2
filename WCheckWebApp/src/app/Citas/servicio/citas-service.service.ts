import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cita } from '../dominio/Citas';

@Injectable({
  providedIn: 'root'
})
export class CitasServiceService {

  constructor(
    private http: HttpClient
  ) { }
  
  getCitas(idVehiculo:number) {
    return this.http.get<any[]>('http://localhost:3000/TL_Citas?IdVehiculo='+idVehiculo);
  }
  postCita(cita: Cita) {
    return this.http.post<any>('http://localhost:3000/TL_Citas',cita);
  }
  postCitaEstado(cita: Cita) {
  return this.http.post<any>('http://localhost:3000/TL_CitasEstado',cita);
  }
}
