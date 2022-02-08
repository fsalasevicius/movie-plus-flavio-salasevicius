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
  public new_user : any = {};
  public op = 1;
  constructor(private _router:Router, private _clienteService:ClienteService) { }
  ngOnInit(): void {
    if(this.token){
      this._router.navigate(['/']);
    }
  }

  changeOp(op:any){
    this.op = op;
  }

  func_login(loginForm:any){
    if(loginForm.valid){
      
      this.login(this.user.dni,this.user.password);
      
    }else{
      iziToast.show({
          title: 'ERROR',
          titleColor: '#FF0000',
          color: '#FFF',
          class: 'text-danger',
          position: 'topRight',
          message: 'Los datos del formulario no son validos'
      });
    }
  }
  
  login(dni:any,password:any) {

          let data = {
            dni: dni,
            password: password
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
          
            

        

    }

    registro(registroForm:any){
      if(registroForm.valid){
       
        if(this.new_user.password.length <=5){
          iziToast.show({
              title: 'ERROR',
              titleColor: '#FF0000',
              color: '#FFF',
              class: 'text-danger',
              position: 'topRight',
              message: 'La contraseña debe tener mas de 5 caracteres'
          });
        }else{
          console.log(this.new_user);
          
          this._clienteService.registro_cliente(this.new_user).subscribe(
            response=>{
              console.log(response);
              
              if(response.data != undefined){
                iziToast.show({
                    title: 'SUCCESS',
                    titleColor: '#1DC74C',
                    color: '#FFF',
                    class: 'text-success',
                    position: 'topRight',
                    message: 'Se registro correctamente.'
                });
                this.user.dni = this.new_user.dni;
                this.user.password = this.new_user.password;
                this.login(this.user.dni,this.user.password);
              }else{
                iziToast.show({
                  title: 'ERROR',
                  titleColor: '#FF0000',
                  color: '#FFF',
                  class: 'text-danger',
                  position: 'topRight',
                  message: response.message
              });
              }
            }
          );
        }
              
      }else{
        iziToast.show({
            title: 'ERROR',
            titleColor: '#FF0000',
            color: '#FFF',
            class: 'text-danger',
            position: 'topRight',
            message: 'Los datos del formulario no son validos'
        });
      }
    }
    

}
