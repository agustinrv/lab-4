import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss']
})
export class ActorListadoComponent implements OnInit {

  @Input() listadoActores:any;

  constructor() { }

  ngOnInit(): void {
  }

}
