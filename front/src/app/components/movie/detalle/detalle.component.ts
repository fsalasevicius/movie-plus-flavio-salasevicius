import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { CarritoService } from '../../../services/carrito.service';

declare var iziToast:any;

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit, OnDestroy {
  termino: string = '';
  public resultado:Array<any> = [];
  public peli_arr:Array<any> = [];
  public selec:Array<any> = [];
  public cant:any;
  public id:any;
  
  public token :any = '';
  public carrito_data : any = {
    cantidad:1,
    producto:''
  };

  hayError: boolean | undefined;
  peliculas: any;
  constructor(
    private router: Router, private route:ActivatedRoute,private _productosService: ProductoService, private _carritoService:CarritoService
  ) { 
    this.token = localStorage.getItem('token');
    this.route.params.subscribe(
      params=>{
        this.id = params['id'];
      }
    )
  }


  ngOnInit() {
    this.hayError = false;
    this.peliculas =  this._productosService.listar_productos(this.termino).subscribe(
      response=>{
       this.peli_arr =  response.data;
       this.resultado = response.data;
       const selec = this.peli_arr.filter(peliculas => peliculas._id == this.id);
      this.cant = selec[0].cantidad;
    
      },(err)=>{
      this.hayError = true;
    })
    
  }

  ngOnDestroy() {
    
  }



  agregar_producto(){
    if(this.carrito_data.cantidad >= 1){
      let data = {
       cantidad: this.carrito_data.cantidad,
       cliente: localStorage.getItem('_id'),
       producto: this.id
      }
      this._carritoService.agregar_carrito(data,this.token).subscribe(
        response=>{
          if(response.data == undefined){
            iziToast.show({
                title: 'ERROR',
                titleColor: '#FF0000',
                color: '#FFF',
                class: 'text-danger',
                position: 'topRight',
                message: 'El producto ya existe en el carrito'
            });
          }else{

            iziToast.show({
                title: 'SUCCESS',
                titleColor: '#1DC74C',
                color: '#FFF',
                class: 'text-success',
                position: 'topRight',
                message: 'Se agregó el producto al carrito.'
            });
          }
        }
      );
    }else{
      iziToast.show({
        title: 'ERROR',
        titleColor: '#1a191f',
        color: '#A2B3EB',
        class: 'text-danger',
        position: 'topRight',
        message: 'La cantidad seleccionada debe ser mayor a 0' 
      });
    }
  }
}
