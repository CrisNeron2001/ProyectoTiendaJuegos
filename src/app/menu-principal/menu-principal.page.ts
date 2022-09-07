import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {
  
  public menu: string;
  public usuario: string = this.router.getCurrentNavigation().extras.state.user;


  constructor(public activatedRoute: ActivatedRoute, 
    public activeroute: ActivatedRoute,
    public router: Router) {
      this.activeroute.queryParams.subscribe(params => {
        console.log(this.router.getCurrentNavigation());
      });
  }


  ngOnInit() {
    this.menu = localStorage.getItem('cris');
  }

}
