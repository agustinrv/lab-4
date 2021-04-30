import { Injectable } from '@angular/core';
import {HttpClient} from"@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  constructor(private http:HttpClient)
  { 

  }


  public getPeliculas()
  {
    return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=2eccfb3bcaf702152fac575dea5d2ab8");
  }
}
