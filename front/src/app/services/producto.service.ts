import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from "./global";
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  public url;

  constructor(
    private _http:HttpClient
    ){
    this.url = global.url;
   }
   listar_productos(termino:string):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.get(this.url+'listar_productos/',{headers:headers});
  }

  obtener_producto(id:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.get(this.url+'obtener_producto/'+id,{headers:headers});
  }

}


