import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../../services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
declare var iziToast:any;

@Component({
  selector: 'app-peliculas-editar',
  templateUrl: './peliculas-editar.component.html',
  styleUrls: ['./peliculas-editar.component.css']
})
export class PeliculasEditarComponent implements OnInit {

  public token:any;
  public id:any;
  public peli : any = undefined;

    constructor(private _router:Router, private _productoeService:ProductoService,
      private _route : ActivatedRoute,) { 
    this.token = localStorage.getItem('token');
    this.id = localStorage.getItem('_id');
    

  }
  ngOnInit(): void {
      
    this._route.params.subscribe(
      params=>{
        this.id = params['id'];
        console.log(this.id);
        this._productoeService.obtener_pelicula(this.id, this.token).subscribe(
          response=>{
           if(response.data == undefined){
            this.peli = undefined;
            
           }else{
             this.peli = response.data;
           }
            
          },
          error=>{
            console.log(error);
            
          }
        );
        
      }
    );
  }

  actualizar(actualizarForm:any){
    if(actualizarForm.valid){

      var data : any= {};

      data.nombre = this.peli.nombre;
      data.descripcion = this.peli.descripcion;
      data.estreno = this.peli.estreno;
      data.genero = this.peli.genero;
      data.duracion = this.peli.duracion;
      data.elenco = this.peli.elenco;
      data.clasificacion = this.peli.clasificacion;
      data.img = this.peli.img;
      data.stars = this.peli.stars;
      data.new = this.peli.new;
      data.precio = this.peli.precio;
      data.cantidad = this.peli.cantidad;
      data.alt = this.peli.alt;
    

      this._productoeService.actualizar_pelicula(data,this.id,this.token).subscribe(
        response=>{
          iziToast.show({
              title: 'SUCCESS',
              titleColor: '#1DC74C',
              color: '#FFF',
              class: 'text-success',
              position: 'topRight',
              message: 'La pelicula fue actualizada correctamente.'
          });


          this._router.navigate(['/admin/peliculas/peliculas-abm']);
        },
        error=>{
          console.log(error)
        }
      )

    }else{
      iziToast.show({
          title: 'ERROR',
          titleColor: '#FF0000',
          color: '#FFF',
          class: 'text-danger',
          position: 'topRight',
          message: 'Los datos del formulario no son validos'
      });
    }
}
}
