import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ProductoService } from '../../../../services/producto.service';
declare var iziToast:any;

@Component({
  selector: 'app-peliculas-abm',
  templateUrl: './peliculas-abm.component.html',
  styleUrls: ['./peliculas-abm.component.css']
})
export class PeliculasAbmComponent implements OnInit {

  public token:any;
  public peliculas : any = undefined;
  public termino:any = '';
  
  constructor(private _productosService:ProductoService,
    private _router:Router,) {
    this.token = localStorage.getItem('token');
   }

  ngOnInit(): void {
    this.peliculas =  this._productosService.listar_productos(this.termino).subscribe(
      response=>{
       this.peliculas =  response.data;
      },(err)=>{
      console.log(err)
    })
  }

  eliminar(id:any){
      this._productosService.eliminar_pelicula(id,this.token).subscribe(
        response=>{
          iziToast.show({
              title: 'SUCCESS',
              titleColor: '#1DC74C',
              color: '#FFF',
              class: 'text-success',
              position: 'topRight',
              message: 'La pelicula se ha eliminado correctamente.'
          });
          this._router.navigate(['/admin/peliculas/peliculas-abm']);
        },
        error=>{
          iziToast.show({
              title: 'SUCCESS',
              titleColor: '#ff0000',
              color: '#FFF',
              class: 'text-success',
              position: 'topRight',
              message: 'Ocurrió un error en el servidor.'
          });
        }
      )
    }

}
