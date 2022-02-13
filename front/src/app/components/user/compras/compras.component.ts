import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { global } from '../../../services/global';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  public url = global.url;
  public token = localStorage.getItem('token');
  public orden : any = {};
  public detalles : Array<any> = [];
  public id:any = '';
  public ordenes : Array<any> = [];

  constructor(
    private _productoService:ProductoService,
    private _clienteService:ClienteService
  ) { 


  }

  ngOnInit(): void {
    
    this.init_data();
  }

  init_data(){
    this._productoService.obtener_ordenes(localStorage.getItem('_id'),this.token).subscribe(
      response=>{
        console.log(response);
        
        this.ordenes = response.data;
      }
    );
  }

}
