import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-consola',
  templateUrl: './producto-consola.page.html',
  styleUrls: ['./producto-consola.page.scss'],
})
export class ProductoConsolaPage implements OnInit {
  usuario: string;
  
  listaConsola = [{
    img: 'assets/icon/img/PS5.webp',
    nombreJuego: 'PS5',
    precio: 600000
    },{
    img: 'assets/icon/img/f085c120-d3d5-4424-8b70-eb25deaa326e.png',
    nombreConsola: 'Xbox Series X',
    precio: 597200
    },{
    img:'assets/icon/img/PS4-Console-wDS4.png',
    nombreConsola:'PS4',
    precio:500000
  }]
  constructor() {}
  ngOnInit() {
    this.usuario = localStorage.getItem('cris');
  }

}
