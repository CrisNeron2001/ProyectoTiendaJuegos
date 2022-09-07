import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoJuegoPageRoutingModule } from './producto-juego-routing.module';

import { ProductoJuegoPage } from './producto-juego.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoJuegoPageRoutingModule
  ],
  declarations: [ProductoJuegoPage]
})
export class ProductoJuegoPageModule {}
