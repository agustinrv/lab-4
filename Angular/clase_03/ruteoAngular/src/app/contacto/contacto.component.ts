import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public valor="empiezo"


  constructor() { }

  ngOnInit(): void {
  }

  CambiarTexto()
  {
    this.valor="otro valor";
  }

  CambiarColor(color:string)
  {
    this.valor=color;
  }


}
