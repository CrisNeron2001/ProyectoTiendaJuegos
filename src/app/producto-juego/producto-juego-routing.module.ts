import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoJuegoPage } from './producto-juego.page';

const routes: Routes = [
  {
    path: '',
    component: ProductoJuegoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoJuegoPageRoutingModule {}
