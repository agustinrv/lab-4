import { Component, OnInit } from '@angular/core';
import { NavigationBehaviorOptions, Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  
  public unUsuario:any; 

  constructor(private router:Router) 
  {     

  }

  ngOnInit(): void {
  }

  public Logearse()
  {
     localStorage.setItem("usuario","anonimo");
  }



}




