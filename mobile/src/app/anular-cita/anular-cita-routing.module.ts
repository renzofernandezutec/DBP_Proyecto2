import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnularCitaPage } from './anular-cita.page';

const routes: Routes = [
  {
    path: '',
    component: AnularCitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnularCitaPageRoutingModule {}
