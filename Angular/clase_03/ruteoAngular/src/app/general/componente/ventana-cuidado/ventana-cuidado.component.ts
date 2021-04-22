import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-ventana-cuidado',
  templateUrl: './ventana-cuidado.component.html',
  styleUrls: ['./ventana-cuidado.component.css']
})
export class VentanaCuidadoComponent implements OnInit {


  @Input() recibo:string="";

  @Output() cambioElValor:EventEmitter<any>= new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  dispararEvento()
  {
     this.cambioElValor.emit("amarillo");
  }

}
