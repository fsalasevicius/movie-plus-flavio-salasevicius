import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { DetalleComponent } from './components/movie/detalle/detalle.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';
import { LoginComponent } from './components/login/login.component';
import  { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { MiListaComponent } from './components/mi-lista/mi-lista.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CarritoComponent } from './components/carrito/carrito.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { DatosComponent } from './components/user/datos/datos.component';
import { ComprasComponent } from './components/user/compras/compras.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DetalleComponent,
    PaginaNoEncontradaComponent,
    LoginComponent,
    RegisterComponent,
    PeliculasComponent,
    MiListaComponent,
    FooterComponent,
    FilterPipe,
    CarritoComponent,
    DatosComponent,
    ComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IvyCarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
