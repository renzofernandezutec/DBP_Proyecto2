import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnularCitaPageRoutingModule } from './anular-cita-routing.module';

import { AnularCitaPage } from './anular-cita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnularCitaPageRoutingModule
  ],
  declarations: [AnularCitaPage]
})
export class AnularCitaPageModule {}
