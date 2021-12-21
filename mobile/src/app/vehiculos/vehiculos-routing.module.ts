import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiculosPage } from './vehiculos.page';

const routes: Routes = [
  {
    path: '',
    component: VehiculosPage
  },
  {
    path: 'view/:id',
    loadChildren: () => import('./view/view.module').then( m => m.ViewPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiculosPageRoutingModule {}
