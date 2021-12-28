import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public resultado:Array<any> = [];
  public peli_arr:Array<any> = [];
  public id:any;
  termino: string = '';
  hayError: boolean | undefined;
  peliculas: any;
  constructor(private router: Router,private route:ActivatedRoute, private _productosService:ProductoService) { 
    this.route.params.subscribe(
      params=>{
        this.id = params['id'];
        this._productosService.obtener_producto(this.id).subscribe(
        response=>{
        })
      }
    )
  }


  ngOnInit() {
    this.hayError = false;
    this.peliculas =  this._productosService.listar_productos(this.termino).subscribe(
      response=>{
       this.peli_arr =  response.data;
       this.resultado = response.data;
      },(err)=>{
      this.hayError = true;
    })
    
  }



}
