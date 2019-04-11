import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TiendaComponent } from './component/tienda/tienda.component';
import { UbicacionComponent } from './component/ubicacion/ubicacion.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { ProductosComponent } from './component/productos/productos.component';
import { Page404Component } from './component/page404/page404.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { RestService } from './services/rest.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    UbicacionComponent,
    NavbarComponent,
    InicioComponent,
    ProductosComponent,
    Page404Component,
    ContactoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
