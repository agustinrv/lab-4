import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl, Form ,FormBuilder, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public forma:FormGroup;


  public constructor(private fb:FormBuilder)
  {
    
  }


  ngOnInit()
  {
     /*this.forma = new FormGroup({
       'nombre': new FormControl(''),
       'apellido': new FormControl(''),
       'dni': new FormControl(''),
       'sexo': new FormControl(''),
       'email': new FormControl(''),
       'terminos': new FormControl('')
     });*/

     this.forma=this.fb.group({
       "nombre" :['',[Validators.required, this.ValidadorDeEspacio]],
       "edad":['',[Validators.required,Validators.min(18),Validators.max(80)]],
       "terminos":['',[Validators.required]],
       "email" : ['',[Validators.pattern(/\S+@\S+\.\S+/)]]
     });
  }

  public ValidadorDeEspacio(control:AbstractControl):null | Object
  {
      const nombre =<string>control.value;
      const tieneEspacios=nombre.includes(' ');

      if(tieneEspacios)
      {
         return {contiene:true}
      }
      else
      {
         return null;
      }
  }

  public Enviar()
  {
    console.info("objeto formulario",this.forma);
  }




}
