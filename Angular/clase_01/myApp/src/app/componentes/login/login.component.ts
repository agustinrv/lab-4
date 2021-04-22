import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario:string;
  public contrasenia:string;

  constructor() 
  { 
      this.usuario="";
      this.contrasenia="";
  }

  Ingresar()
  {
    if(this.usuario=="pedro" && this.contrasenia=="1234")
    {
        window.alert("BIENVENIDOOOOOOOOOOO");
    }
    
  }

  ngOnInit(): void {
  }

}
