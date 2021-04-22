import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculasAltaComponent } from './componentes/peliculas/peliculas-alta/peliculas-alta.component';
import { ActorAltaComponent } from './componentes/actor/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor/actor-listado/actor-listado.component';
import { PeliculasListadoComponent } from './componentes/peliuculas/peliculas-listado/peliculas-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    PeliculasAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculasListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
