import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { global } from '../../../../services/global';
import { ClienteService } from '../../../../services/cliente.service';


@Component({
  selector: 'app-detalle-compras',
  templateUrl: './detalle-compras.component.html',
  styleUrls: ['./detalle-compras.component.css']
})
export class DetalleComprasComponent implements OnInit {

  public url = global.url;
  public token = localStorage.getItem('token');
  public orden : any = {};
  public detalles : Array<any> = [];
  public id:any = '';
  public user:any;

  constructor(
    private _productoService:ProductoService,
    private _route:ActivatedRoute,
    private _router:Router,
    private _clienteService:ClienteService
  ) { 
    this.token = localStorage.getItem('token');
    this.url = global.url;
    this._route.params.subscribe(
      params=>{
        this.id = params['id'];
        this.init_data();
      }
    );
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

  ngOnInit(): void {
  }

  init_data(){
    this._productoService.obtener_detalles_ordenes(this.id,this.token).subscribe(
      response=>{
        if(response.data != undefined){
          this.orden = response.data;
          this.detalles = response.detalles;
        }else{
          this.orden = undefined;
        }
      }
    );
  }

}
