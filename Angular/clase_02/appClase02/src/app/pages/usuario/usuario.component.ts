import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario:string="nadie";

  constructor(private miServicio:UsuarioService) 
  { 
      console.log(miServicio.usuarioVigente);
  }

  Guardar()
  {
      this.miServicio.usuarioVigente=this.usuario;
  }

  ngOnInit(): void 
  {
     this.usuario=this.miServicio.usuarioVigente;
  }

}
