
import { Component, OnInit } from '@angular/core';
import { ServicioActoresService } from 'src/app/servicios/actores/servicio-actores.service';
import { ServicioPaisesService } from 'src/app/servicios/paises/servicio-paises.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {
  public listaActores:any;
  public listaPaises:any;

  constructor(private actorService:ServicioActoresService,private paisesServices:ServicioPaisesService) { }

  ngOnInit(): void {
    this.actorService.GetActores().subscribe((data)=>{
      let recibo=JSON.stringify(data);
      this.listaActores=JSON.parse(recibo).results;
      console.log(this.listaActores);
    });

    this.paisesServices.TraerPaises().subscribe((data)=>{
      let recibo=JSON.stringify(data);
      this.listaPaises=JSON.parse(recibo).name;
      
    });
  }

}
