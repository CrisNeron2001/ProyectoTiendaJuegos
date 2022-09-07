import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  public usuario: string='';

  constructor(public router: Router) { }
  
  ngOnInit() {

  }
  
  ngOnClick(){  
    let navigationExtras: NavigationExtras = {
      state: {user: this.usuario}
    };
    localStorage.setItem('cris',this.usuario)
    this.router.navigate(['/paginaPrincipal'], navigationExtras);
  }
}

