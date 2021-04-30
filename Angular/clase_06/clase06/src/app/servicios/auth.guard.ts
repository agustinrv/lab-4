import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public constructor(private router:Router,private authService:AuthService)
  {
      
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("estoy verificando ruta" + state.url);
    return this.ChequearUsuario();
  }

  public ChequearUsuario()
  {
      let retorno:boolean=false

      if(this.authService.estaLogeado)
      {
          retorno=false;
      }
      else
      {
          this.router.navigate(["/login"]);
      }
      console.log(retorno);


     return retorno;
  }


  
}
