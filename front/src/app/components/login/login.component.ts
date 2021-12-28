import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
declare var iziToast:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario : any = {};
  public user : any = {};
  public token = localStorage.getItem('token');

  constructor(private _router:Router, private _clienteService:ClienteService) { }
  ngOnInit(): void {
    if(this.token){
      this._router.navigate(['/']);
    }
  }
       login(loginForm:any) {
        
        if (loginForm.valid) {

          let data = {
            dni: this.user.dni,
            password: this.user.password
          }

          this._clienteService.login_cliente(data).subscribe(response=>{
            if(response.data == undefined){
              iziToast.show({
                title: 'ERROR',
                titleColor: '#1a191f',
                color: '#A2B3EB',
                class: 'text-danger',
                position: 'topRight',
                message: response.message
              });
            }else{
              this.usuario =  response.data;
              localStorage.setItem('token',response.token);
              localStorage.setItem('_id',response.data._id);

              this._router.navigate(['/']);
            }
          }, error=>{
            console.log(error)
          });
          
            
        }else{ 
          iziToast.show({
            title: 'ERROR',
            titleColor: '#1a191f',
            color: '#A2B3EB',
            class: 'text-danger',
            position: 'topRight',
            message: 'Sus credenciales de acceso no son validas' 
          });
        }
        

    }
    

}
