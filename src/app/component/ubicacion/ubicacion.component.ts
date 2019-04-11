import {  Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent {

  @Input() nombre: string;
  // public nombre: string;
  public zona: number;
  public descripcion: string;
  public encargado: string;
  public abierto: boolean;
  @Output() pasameLosDatos = new EventEmitter;
  constructor() { 
    this.nombre = 'Tienda 1'
    this.zona = 18;
    this.descripcion = 'En el limon';
    this.encargado = 'Kevin Román'
    this.abierto = true;    
  }

  ngOnInit() {
  }

  emitirEvento(){
    this.pasameLosDatos.emit({
        'nombre': this.nombre,
        'zona': this.zona,
        'descripcion': this.descripcion,
        'encargo': this.encargado,
        'abierto': this.abierto
    });
}
}
