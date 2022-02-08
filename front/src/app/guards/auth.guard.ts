import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ClienteService } from '../services/cliente.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _router:Router,
    private _clienteService:ClienteService
  ){

  }

  canActivate():any{
    let access:any = this._clienteService.isAuthenticate();

    if(!access){
      this._router.navigate(['/']);
    }
    return true;
  }
}
