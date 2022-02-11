import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../../services/cliente.service';

@Component({
  selector: 'app-ventas-index',
  templateUrl: './ventas-index.component.html',
  styleUrls: ['./ventas-index.component.css']
})
export class VentasIndexComponent implements OnInit {

  public ventas : Array<any>=[];
  public const_ventas : Array<any>=[];
  public token = localStorage.getItem('token');
  constructor(
    private _clienteService:ClienteService
  ) { }

  ngOnInit(): void { 
    this._clienteService.obtener_ventas(this.token).subscribe(
      response=>{
        this.ventas = response.data;
        this.const_ventas = this.ventas;
      }
    );
  }

}
