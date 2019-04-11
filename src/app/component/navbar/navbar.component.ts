import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,DoCheck {
  

  constructor() { }
  public app_name: string = "Tiendita";
  correo: string;
  ngOnInit() {
    this.correo = localStorage.getItem('correo');

  }
  ngDoCheck() {
    this.correo = localStorage.getItem('correo');
  }
  eliminarCorreo(){
    localStorage.removeItem('correo');
  }
}
