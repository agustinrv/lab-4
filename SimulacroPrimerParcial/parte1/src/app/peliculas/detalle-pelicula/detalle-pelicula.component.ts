import { Pelicula } from './../../clases/pelicula';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() pelicula:any=false;
  constructor() { 

  }

  ngOnInit(): void {
  }

}
