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

  obtener_pelicula(id:any, token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token})
    return this._http.get(this.url+'obtener_pelicula/'+id,{headers:headers});
  }

  actualizar_pelicula(data:any,id:any,token:any):Observable<any>{
      let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
      return this._http.put(this.url+'actualizar_pelicula/'+id,data,{headers:headers});
  }

  eliminar_pelicula(id:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.delete(this.url+'eliminar_pelicula/'+id,{headers:headers});
  }

}


