import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../../../../services/producto.service';
declare var iziToast:any;

@Component({
  selector: 'app-peliculas-nueva',
  templateUrl: './peliculas-nueva.component.html',
  styleUrls: ['./peliculas-nueva.component.css']
})
export class PeliculasNuevaComponent implements OnInit {
  public peli: any = {};
  
  public token = localStorage.getItem('token');

  constructor(
    private _productoService:ProductoService,
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  registro(registroForm:any){
    if(registroForm.valid){

        
        this._productoService.registro_producto(this.peli,this.token).subscribe(
          response=>{
            console.log(this.peli)
            if(response.data == undefined){
              iziToast.show({
                  title: 'ERROR',
                  titleColor: '#FF0000',
                  color: '#FFF',
                  class: 'text-danger',
                  position: 'topRight',
                  message: response.message
              });
            }else{
              iziToast.show({
                  title: 'SUCCESS',
                  titleColor: '#1DC74C',
                  color: '#FFF',
                  class: 'text-success',
                  position: 'topRight',
                  message: 'Se registro correctamente el nuevo producto.'
              });

              this._router.navigate(['/productos']);
            }
          },
          error=>{
          }
        );

     
      
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
