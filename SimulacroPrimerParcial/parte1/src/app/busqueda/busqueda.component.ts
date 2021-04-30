import { Pelicula } from './../clases/pelicula';
import { MiServicioService } from './../servicios/peliculas/mi-servicio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
  public peliculaSeleccionada:any=false;
  

  public listadoPeliculas:any=null;//any[] = [
                     // {id: 100, nombre: "Justice League", tipo: "Accion" , fechaDeEstreno: "03/18/2021", cantidadDePublico: 100, FotoDeLaPelicula: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" },
                      //{id: 101, nombre: "Godzilla vs Kong", tipo: "Accion" , fechaDeEstreno: "05/20/2021", cantidadDePublico: 200, FotoDeLaPelicula: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg" },
                     // {id: 102, nombre: "Tom & Jerry", tipo: "Comedia" , fechaDeEstreno: "02/26/2021", cantidadDePublico: 1000, FotoDeLaPelicula: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6KErczPBROQty7QoIsaa6wJYXZi.jpg" },
                    //]
   public constructor(private MiServicio:MiServicioService)
   {
      
   }

   ngOnInit(){
    this.MiServicio.getPeliculas()
    .subscribe(data=>{
      let algo= JSON.stringify(data);
      this.listadoPeliculas=JSON.parse(algo).results;
      console.log(this.listadoPeliculas);
    });
   }
 
                    
  RecibirPelicula(unaPelicula:Pelicula)
  {
     this.peliculaSeleccionada=unaPelicula;
  }
}
