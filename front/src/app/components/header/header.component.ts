import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from 'src/app/services/datos.service';
import { ClienteService } from '../../services/cliente.service';
import { CarritoService } from '../../services/carrito.service';
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public token:any;
  public id:any;
  public user : any = undefined;
  public resultado:Array<any> = [];
  public peli_arr:Array<any> = [];
  public carrito_cliente :Array<any> = [];
  public dventa : Array<any> = [];
  public subtotal = 0;
  public venta : any = {};
  termino: string = '';
  constructor(private _datosService:DatosService, private _router:Router, private _clienteService:ClienteService,private _carritoService:CarritoService) { 
    this.token = localStorage.getItem('token');
    this.id = localStorage.getItem('_id');
    if(this.token){
      this._clienteService.obtener_cliente(this.id,this.token).subscribe(
        response=>{
        this.user = response.data;
        localStorage.setItem('user_data', JSON.stringify(this.user));
        if(localStorage.getItem('user_data')){
          
          this.user = JSON.parse(localStorage.getItem('user_data')!);

          
        }else{
          this.user = undefined;
        }
       
        
      },error=>{
        this.user = undefined;
      })

    }

  }

 
  obtener_carrito(){
    this._carritoService.traer_carrito(this.user._id,this.token).subscribe(
      response=>{
        this.carrito_cliente =  response.data;
        this.carrito_cliente.forEach(element => { 
            this.dventa.push({
              producto: element.producto._id,
              subtotal: element.producto.precio,
              cantidad: element.cantidad,
              cliente: localStorage.getItem('_id')
            });
         
      });
        this.calcular_carrito();
      }
    );
  }

 calcular_carrito(){
  this.subtotal = 0;
  this.carrito_cliente.forEach(element => {
    let sub_precio = parseInt(element.producto.precio) * element.cantidad;
    this.subtotal = this.subtotal + sub_precio;
    return this.subtotal;
});
 }

  ngOnInit() {
    this._datosService.buscarMovies(this.termino).subscribe(res =>{
      this.peli_arr =  res;
      this.resultado = res;
    });
  }

  logout(){
    this.token = localStorage.removeItem('token');
    this.id = localStorage.removeItem('_id');
    this._router.navigate(['./login']);
  }

  comprar(){
    this.venta.subtotal = this.subtotal;
    this.venta.detalles = this.dventa;
    let idcliente = localStorage.getItem('_id');
    this.venta.cliente = idcliente;
    
    this._clienteService.registro_compra(this.venta,this.token).subscribe(
      response=>{
        
        console.log(this.carrito_cliente)
        this.obtener_carrito();
        this._router.navigate(['/user/compras/'+response.data._id]);
      },
      error=>{
        console.log(error);
        
      }
    );
  }

}
