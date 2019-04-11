import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiendaComponent } from './component/tienda/tienda.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { ProductosComponent } from './component/productos/productos.component';
import { Page404Component } from './component/page404/page404.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { UbicacionComponent } from './component/ubicacion/ubicacion.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'ubicacion', component: UbicacionComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
