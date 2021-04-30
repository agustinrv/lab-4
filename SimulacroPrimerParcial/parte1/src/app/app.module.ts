import { PeliculaListadoComponent } from './peliculas/pelicula-listado/pelicula-listado.component';
import { PeliculaAltaComponent } from './peliculas/pelicula-alta/pelicula-alta.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './busqueda/busqueda.component';


import { ActorListadoComponent } from './actor/actor-listado/actor-listado.component';
import { DetallePeliculaComponent } from './peliculas/detalle-pelicula/detalle-pelicula.component';
import { HttpClientModule } from '@angular/common/http';
import { ActorAltaComponent } from './actor/actor-alta/actor-alta.component';


@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    PeliculaListadoComponent,
    ActorAltaComponent,    
    ActorListadoComponent,
    DetallePeliculaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
