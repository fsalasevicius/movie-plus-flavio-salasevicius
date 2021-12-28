
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductoService } from '../../services/producto.service';
import { CarritoService } from '../../services/carrito.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var iziToast:any;
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, OnDestroy {
  termino: string = '';
  filterPeli = '';
  hayError: boolean = false;
  public token :any = '';
  peliculas: Subscription | undefined
  public productos : Array<any> =  [];
  public resultado:Array<any> = [];
  public peli_arr:Array<any> = [];
  public peli: any = {};
  public id:any;

  constructor( private router: Router, private route:ActivatedRoute,private _productosService: ProductoService, private _carritoService:CarritoService) { 

   
  }

  ngOnInit() {
    this.hayError = false;
    this.peliculas =  this._productosService.listar_productos(this.termino).subscribe(
      response=>{
       this.peli_arr =  response.data;
       this.resultado = response.data;
      },(err)=>{
      this.hayError = true;
    })
    
  }

  buscar(){
    let buscador :any = document.getElementById('filterPeli');
    let buscadorCerrar :any = document.getElementById('cerrarFiltro');
    buscador.type = "text";
    buscadorCerrar.style = "block";
  }

  cerrarFiltro(){
    let buscador :any = document.getElementById('filterPeli');
    let buscadorCerrar :any = document.getElementById('cerrarFiltro');
    buscador.type = "hidden";
    buscadorCerrar.style = "display: none;";
  }
  
  rating(){
    const peli_rating = this.peli_arr.filter(peliculas => peliculas.stars == 5);
    this.resultado = peli_rating 
    return this.resultado
  }

  new(){
     const new_arr = this.peli_arr.filter(peliculas => peliculas.new === 'true');
     this.resultado = new_arr;
     return this.resultado
   }

   all(){
    const all_peli = this.resultado.map(pelicula => {
      this.resultado = this.peli_arr 
      return this.resultado 
    });

  }

  ngOnDestroy(): void {
    this.peliculas?.unsubscribe();
  }
}
