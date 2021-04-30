import { Component, Input, OnInit } from '@angular/core';
import { ServicioPaisesService } from '../servicios/paises/servicio-paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  public listaPaises:any;

  constructor(private paisesService:ServicioPaisesService) 
  { 

  }

  ngOnInit(): void 
  {
    this.paisesService.TraerPaises().subscribe((data)=>{
      let recibo=JSON.stringify(data);
      this.listaPaises=JSON.parse(recibo);
      console.log(this.listaPaises);
    });
  }






}
