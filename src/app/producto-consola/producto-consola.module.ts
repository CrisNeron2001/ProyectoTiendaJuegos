import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoConsolaPageRoutingModule } from './producto-consola-routing.module';

import { ProductoConsolaPage } from './producto-consola.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoConsolaPageRoutingModule
  ],
  declarations: [ProductoConsolaPage]
})
export class ProductoConsolaPageModule {}
