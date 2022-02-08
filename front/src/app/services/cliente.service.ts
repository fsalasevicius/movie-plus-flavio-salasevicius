import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { global } from "./global";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public url;

  constructor(
    private _http:HttpClient,
    ){
    this.url = global.url;
   }

  login_cliente(data:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this._http.post(this.url+'login_cliente',data,{headers:headers});
  }

  registro_cliente(data:any):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url + 'registro_cliente',data,{headers:headers});
  }

  obtener_cliente(id:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url+'obtener_cliente/'+id,{headers:headers});
  }

  agregar_carrito(data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.post(this.url+'agregar_carrito',data,{headers:headers});
  }

  compra_cliente(data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.post(this.url+'compra_cliente',data,{headers:headers});
  }

  isAuthenticate(){
    const token : any = localStorage.getItem('token');
  
    try {
      const helper = new JwtHelperService();
      var decodedToken = helper.decodeToken(token);

      if(!token){
        localStorage.clear();
        return false;
      }

      if(!decodedToken){
        localStorage.clear();
        return false;
      }
    
      if(helper.isTokenExpired(token)){
        localStorage.clear();
        return false;
      }

    } catch (error) {
      console.log(error);
      
      localStorage.clear();
      return false;
    }

    return true;
  }

}
