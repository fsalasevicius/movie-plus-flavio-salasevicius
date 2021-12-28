import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  public token:any;
  public id:any;
  public user : any = undefined;

    constructor(private _router:Router, private _clienteService:ClienteService) { 
    this.token = localStorage.getItem('token');
    this.id = localStorage.getItem('_id');
    this._clienteService.obtener_cliente(this.id,this.token).subscribe(response=>{
      
      this.user = response.data;
      
    },error=>{
      this.user = undefined;
    })

  }

  ngOnInit(): void {
  }

}
