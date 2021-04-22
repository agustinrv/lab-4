import { Component, OnInit } from '@angular/core';
import { ServicioPaisesService } from '../servicios/servicio-paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  public miPais;

  constructor(private paisesService:ServicioPaisesService) 
  { 

  }

  ngOnInit(): void 
  {
     this.miPais=this.paisesService.ObtenerPaisActual();

     this.paisesService.TraerPaises().subscribe(resultado=>{
          console.log(resultado);
     });
  }






}
