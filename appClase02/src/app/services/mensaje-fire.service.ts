import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection} from "@angular/fire/firestore";
import {Mensaje} from "../clases/mensaje";



@Injectable({
  providedIn: 'root'
})
export class MensajeFireService {
  rutaDeLaColeccion = "/mensajeFire";
  referenciaAlaColeccion : AngularFirestoreCollection<Mensaje>;

  constructor(private bd:AngularFirestore)
  { 
      this.referenciaAlaColeccion= bd.collection(this.rutaDeLaColeccion);
  }

  public AgregarUno(mensaje:Mensaje):any
  {
    return this.referenciaAlaColeccion.add({...mensaje});
  }

}