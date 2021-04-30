import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public estaLogeado=false;

  constructor() { 

  }

  public LogOut()
  {
    localStorage.setItemItem("usuario","");
    this.estaLogeado=false;
  }

  public Logearse(usuario:string)
  {
     localStorage.setItem("usuario",usuario);
     this.estaLogeado=true;
  }

  public Registrar()
  {

  }


}
