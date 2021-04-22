import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Input() usuarioError:string;
  @Input() contraseniaError:string;

    constructor()
    { 
      this.usuarioError="" ;
      this.contraseniaError="";
    }

  ngOnInit(): void {
  }

}
