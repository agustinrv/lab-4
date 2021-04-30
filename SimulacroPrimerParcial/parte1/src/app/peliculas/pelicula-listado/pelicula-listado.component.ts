import { Pelicula } from './../../clases/pelicula';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.scss']
})
export class PeliculaListadoComponent implements OnInit {

  @Input() listadoPeliculas:any[]=[];
  @Output() peliculaSeleccionada:EventEmitter<any>=new EventEmitter<any>();
  

  constructor() 
  { 
      
  }

  ngOnInit() {
    //this.MiServicio.getPeliculas()
      //.subscribe(arg => this.property = arg);
  }

  public MostrarPelicula(pelicula:any)
  {
     this.peliculaSeleccionada.emit(pelicula);
  }


}
