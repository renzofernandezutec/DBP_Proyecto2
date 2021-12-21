import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VistaCitasComponent } from './Citas/vista/vista-citas.component';
import { VistaNuevaCitaComponent } from './NuevaCita/vista/vista-nueva-cita.component';
import { VistaNuevoVehiculoComponent } from './NuevoVehiculo/vista-nuevo-vehiculo.component';
import { LoginComponent } from './seguridad/vista/login.component';
import {VistaVehiculosComponent} from './vehiculos/vista/vista-vehiculos.component';
import { VistaAnularCitaComponent } from './AnularCita/vista/vista-anular-cita.component';
import { VistaRegistroComponent } from './Registro/vista/vista-registro.component';
import { VistaCambiarClaveComponent } from './CambiarClave/vista/vista-cambiar-clave.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([

      { path: '', component: LoginComponent },
      {
          path: 'Vehiculos', component: AppComponent,

          children: [
              {
                  path: 'MisVehiculos', children: [
                      { path: 'Login', component: LoginComponent},
                      { path: 'CambiarClave', component: VistaCambiarClaveComponent},
                      { path: 'Registro', component: VistaRegistroComponent },
                      { path: 'Listado', component: VistaVehiculosComponent},
                      { path: 'Citas/:ver', component: VistaCitasComponent },
                      { path: 'NuevoVehiculo', component: VistaNuevoVehiculoComponent },
                      { path: 'NuevaCita/:nuevo', component: VistaNuevaCitaComponent },
                      { path: 'AnularCita/:anular', component: VistaAnularCitaComponent },
                  ],

              },
          ]

      },

      { path: 'error', component: LoginComponent },

      { path: 'notfound', component: LoginComponent },

      { path: '**', redirectTo: '/notfound' },

  ], { scrollPositionRestoration: 'enabled' })

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
