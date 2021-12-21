import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehiculosPageRoutingModule } from './vehiculos-routing.module';

import { VehiculosPage } from './vehiculos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehiculosPageRoutingModule
  ],
  declarations: [VehiculosPage]
})
export class VehiculosPageModule {}
