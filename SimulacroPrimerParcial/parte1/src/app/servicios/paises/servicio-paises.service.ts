import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioPaisesService {
  public paisActual;

  constructor(private http:HttpClient) {

    this.paisActual = "Argentina";

  }

  public ObtenerPaisActual() {
    return this.paisActual;
  }

  public AsignarPaisActual(pais : string) {

    this.paisActual = pais;

  }

  public TraerPaises()
  {
   return this.http.get("https://restcountries.eu/rest/v2/all");

  }

  public TraerUnPais(pais:string)
  {
  

  }




}