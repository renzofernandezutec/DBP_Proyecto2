import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from '../vehiculos/dominio/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor(
    private http: HttpClient
  ) { }
  
  getVehiculos() {
    return this.http.get<any[]>('http://localhost:3000/TL_VehiculosMast?IdCliente='+sessionStorage.getItem('IdPersona'));
  }
  postVehiculo(vehiculo: Vehiculo) {
    return this.http.post<any>('http://localhost:3000/TL_VehiculosMast',vehiculo);
  }
}
