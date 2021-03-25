import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/clases/mensaje';
import { MensajeFireService } from 'src/app/services/mensaje-fire.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public mensaje:Mensaje
 
  constructor(private miServicio:MensajeFireService) 
  { 
    this.mensaje=new Mensaje();
  }

  public Enviar()
  {
    this.miServicio.AgregarUno(this.mensaje)//.then(()=>{
      

      //console.log("Se Envio el mensaje");
   // });
  }

  ngOnInit(): void {
  }

}
