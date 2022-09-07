import { Component } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  paginas = [
    {
      titulo: 'Ir al Inicio',
      url: '/pagina-principal',
      icono: 'home'
    },
    {
      titulo: 'Juegos',
      url: '/producto-juego',
      icono: 'game-controller'
    },
    {
      titulo: 'Consolas',
      url:'/producto-consola',
      icono:'game-controller'
    },
    {
      titulo: 'Ingregar',
      url: '/inicio-sesion',
      icono: 'log-in'
    }
  ]


  constructor(private activeroute: ActivatedRoute,
    private router: Router) {
      this.activeroute.queryParams.subscribe(params => {
        console.log(this.router.getCurrentNavigation());
      });
  }
}
