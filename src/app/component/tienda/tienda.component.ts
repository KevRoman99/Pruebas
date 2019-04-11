import { Component,OnInit ,DoCheck } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent  implements DoCheck{

  public titulo;
  public nombreDeUbicacion: string;   
  public miUbicacion;
  constructor() { 
    this.titulo = 'Esta es la tienda'
  }

  // ngOnInit() {
  // }
  mostrarNombre(){
    console.log(this.nombreDeUbicacion);
  }
  verDatosUbicacion(event){
    console.log(event);
    this.miUbicacion = event;
  }
  ngDoCheck(){
    console.log('Cambios en la propiedad',this.titulo)
  }
}
