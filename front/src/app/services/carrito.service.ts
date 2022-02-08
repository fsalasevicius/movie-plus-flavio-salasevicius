import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { global } from "./global";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  public url;

  constructor(
    private _http: HttpClient,
  ) { 
    this.url = global.url;
  }

  agregar_carrito(data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.post(this.url+'agregar_carrito',data,{headers:headers});
  }

  traer_carrito(id:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url+'traer_carrito/'+id,{headers:headers});
  }
  
}
