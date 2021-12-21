import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { VehiculosService } from './_services/vehiculos.service';
import { CitasServiceService} from './Citas/servicio/citas-service.service';
import { LoginComponent } from './seguridad/vista/login.component';
import {ClientesMastServicesService} from './seguridad/service/clientes-mast-services.service';
import { FormsModule } from '@angular/forms';
import { VistaVehiculosComponent } from './vehiculos/vista/vista-vehiculos.component';
import { VistaCitasComponent } from './Citas/vista/vista-citas.component';
import { VistaNuevoVehiculoComponent } from './NuevoVehiculo/vista-nuevo-vehiculo.component';
import { VistaNuevaCitaComponent } from './NuevaCita/vista/vista-nueva-cita.component';
import { VistaAnularCitaComponent } from './AnularCita/vista/vista-anular-cita.component';
import { VistaRegistroComponent } from './Registro/vista/vista-registro.component';
import { VistaCambiarClaveComponent } from './CambiarClave/vista/vista-cambiar-clave.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VistaVehiculosComponent,
    VistaCitasComponent,
    VistaNuevoVehiculoComponent,
    VistaNuevaCitaComponent,
    VistaAnularCitaComponent,
    VistaRegistroComponent,
    VistaCambiarClaveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  providers: [VehiculosService, ClientesMastServicesService,CitasServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
