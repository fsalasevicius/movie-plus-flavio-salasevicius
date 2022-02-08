import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private apiUrl: string = 'https://61b9310238f69a0017ce5f1f.mockapi.io/movies';
  constructor(private http: HttpClient) { }
  


  buscarMovies(termino: string):Observable<any>{
    return this.http.get(this.apiUrl);
  }

}
