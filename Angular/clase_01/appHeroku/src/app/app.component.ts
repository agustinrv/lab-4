import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'myApp';
  public edadUno:number;
  public edadDos:number;
  public promedio:number;
  public edadTotal:number;

  public constructor()
  {
    this.edadUno=0;
    this.edadDos=0;
    this.promedio=0;
    this.edadTotal=0;
  }

  SumarEdades()
  {
     this.edadTotal=this.edadUno + this.edadDos;
  }

  CalcularPromedio()
  {
    this.promedio= (this.edadUno + this.edadDos)/ 2;
  }






}
/*2-( componentes nuevos) Realizar:
la clase usuario con nombre y clave ,
el componente "Bienvenido"
el componente "login"
el componente "error"
( dejar los componentes listos)
opcional: hacer ruteo*/
export class Usuario
{
   public nombre:string;
   public clave:string;

   public constructor()
   {
     this.nombre="";
     this.clave="";
   }
}


