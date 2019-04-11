import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  titulo = 'Clase de Productos';
  teachers =  [];
  constructor(public rest: RestService) { }

  ngOnInit() {
    this.getTeachers();
    console.log('productos lanzados');
  }
  getTeachers(){
    console.log(this.rest.endpoint);
    this.rest.getTeachers().subscribe(res =>{
      console.log(res);
      this.teachers = res.teachers;
    });
    
  }
}
