import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoConsolaPage } from './producto-consola.page';

const routes: Routes = [
  {
    path: '',
    component: ProductoConsolaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoConsolaPageRoutingModule {}
