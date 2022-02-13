import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes, CanLoad } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { DetalleComponent } from './components/movie/detalle/detalle.component';
import { MiListaComponent } from './components/mi-lista/mi-lista.component';
import { DatosComponent } from './components/user/datos/datos.component';
import { ComprasComponent } from './components/user/compras/compras.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from "../app/guards/auth.guard";
import { CarritoComponent } from '../app/components/carrito/carrito.component';
import { PeliculasComponent } from '../app/components/peliculas/peliculas.component';
import { PeliculasAbmComponent } from './components/admin/peliculas/peliculas-abm/peliculas-abm.component';
import { PeliculasEditarComponent } from './components/admin/peliculas/peliculas-editar/peliculas-editar.component';
import { PeliculasNuevaComponent } from './components/admin/peliculas/peliculas-nueva/peliculas-nueva.component';
import { DetalleComprasComponent } from './components/user/compras/detalle-compras/detalle-compras.component';
import { VentasIndexComponent } from './components/user/ventas/ventas-index/ventas-index.component';


const routes: Routes = [
  { path: '', component: HomeComponent}, 
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'carrito', component: CarritoComponent},
  { path: 'peliculas', component: PeliculasComponent},
  { path: 'peliculas/:id', component: DetalleComponent},
  { path: 'admin/peliculas/peliculas-abm', component: PeliculasAbmComponent, canActivate:[AuthGuard]},
  { path: 'admin/peliculas/alta', component: PeliculasNuevaComponent, canActivate:[AuthGuard]},
  { path: 'peliculas/editar/:id', component: PeliculasEditarComponent, canActivate:[AuthGuard]},

  
  { path: 'mi-perfil', component: DatosComponent, canActivate:[AuthGuard]},
  { path: 'ventas', component: VentasIndexComponent, canActivate:[AuthGuard]},
  { path: 'mis-compras', component: ComprasComponent, canActivate:[AuthGuard]},
  { path: 'mis-compras/:id', component: DetalleComprasComponent, canActivate:[AuthGuard]},
  { path: 'mi-lista', component: MiListaComponent, canActivate:[AuthGuard]},
  { path: '**', component: PaginaNoEncontradaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
