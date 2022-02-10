import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { global } from '../../../../services/global';


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
  public id = '';

  constructor(
    private _productoService:ProductoService,
    private _route:ActivatedRoute,
    private _router:Router
  ) { 
    this.token = localStorage.getItem('token');
    this.url = global.url;
    this._route.params.subscribe(
      params=>{
        this.id = params['id'];
        this.init_data();
      }
    );
  }

  ngOnInit(): void {
  }

  init_data(){
    this._productoService.obtener_detalles_ordenes(this.id,this.token).subscribe(
      response=>{

        console.log( response );
        if(response.data != undefined){
          this.orden = response.data;

          this.detalles = response.detalles;
        }else{
          this.orden = undefined;
        }
        console.log( this.orden );
        console.log( this.detalles );

      }
    );
  }

}
