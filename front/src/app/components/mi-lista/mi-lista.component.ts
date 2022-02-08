import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-mi-lista',
  templateUrl: './mi-lista.component.html',
  styleUrls: ['./mi-lista.component.css']
})
export class MiListaComponent implements OnInit {


  public peli_arr:Array<any> = [];
 
  constructor() {}
  


  ngOnInit(): void {
  }

}
