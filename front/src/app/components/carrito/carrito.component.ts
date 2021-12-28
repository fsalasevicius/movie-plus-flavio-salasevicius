import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
public venta:any = {};
public dventa:any = [];
public idcliente;
public user : any;
public token:any;  
public carrito_cliente :Array<any> = [];
public subtotal = 0;

  constructor(
    private _clienteService:ClienteService,
    private _carritoService:CarritoService
  )
  {
    this.token = localStorage.getItem('token');
    this.idcliente = localStorage.getItem('_id');
    this.venta.cliente = this.idcliente;
    
  }

  ngOnInit(): void {
    this._carritoService.traer_carrito(this.idcliente,this.token).subscribe(
      response=>{
        this.carrito_cliente =  response.data;
        this.calcular_carrito();
        console.log(this.carrito_cliente.length)
      }
    );
  }

  obtener_carrito(){
    
  }

  calcular_carrito(){
    this.subtotal = 0;
    this.carrito_cliente.forEach(element => {
      let sub_precio = parseInt(element.producto.precio) * element.cantidad;
      this.subtotal = this.subtotal + sub_precio;
      this.venta.subtotal = this.subtotal;
      console.log(this.venta)
  });
}

}
