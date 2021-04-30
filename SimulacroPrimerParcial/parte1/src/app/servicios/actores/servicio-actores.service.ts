import { Injectable } from '@angular/core';
import {HttpClient} from"@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicioActoresService {

  constructor(private http:HttpClient) 
  { 

  }


   public GetActores(){
    return this.http.get("https://api.themoviedb.org/3/person/popular?api_key=2eccfb3bcaf702152fac575dea5d2ab8");
   }
}
