import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes, CanLoad } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { DetalleComponent } from './components/movie/detalle/detalle.component';
import { RegisterComponent } from './components/register/register.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { MiListaComponent } from './components/mi-lista/mi-lista.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { DatosComponent } from './components/user/datos/datos.component';
import { ComprasComponent } from './components/user/compras/compras.component';

const routes: Routes = [
  { path: '', component: HomeComponent}, 
  { path: 'carrito', component: CarritoComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'peliculas/:id', component: DetalleComponent},
  { path: 'peliculas', component: PeliculasComponent},
  { path: 'mi-perfil', component: DatosComponent},
  { path: 'mis-compras', component: ComprasComponent},
  { path: 'mi-lista', component: MiListaComponent},
  { path: '**', component: PaginaNoEncontradaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
