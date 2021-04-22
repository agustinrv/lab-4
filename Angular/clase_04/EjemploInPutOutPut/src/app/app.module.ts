import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { FormsModule } from '@angular/forms';
import { ListadoAlumnosComponent } from './componentes/listado-alumnos/listado-alumnos.component';
import { DetalleAlumnosComponent } from './componentes/detalle-alumnos/detalle-alumnos.component';
import { ProfesorComponent } from './componentes/profesor/profesor.component';
import { DetalleProfesorComponent } from './componentes/detalle-profesor/detalle-profesor.component';
import { ListadoProfesorComponent } from './componentes/listado-profesor/listado-profesor.component';
import { TablaProfesorComponent } from './componentes/tabla-profesor/tabla-profesor.component';
import { FilaProfesorComponent } from './componentes/fila-profesor/fila-profesor.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { PeliculaAltaComponent } from './peliculas/alta/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './actor/alta/actor-alta/actor-alta.component';
import { ActorlistadoComponent } from './actor/listado/actorlistado/actorlistado.component';
import { PeliculaListadoComponent } from './peliculas/listado/pelicula-listado/pelicula-listado.component';
@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    ListadoAlumnosComponent,
    DetalleAlumnosComponent,
    ProfesorComponent,
    DetalleProfesorComponent,
    ListadoProfesorComponent,
    TablaProfesorComponent,
    FilaProfesorComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorlistadoComponent,
    PeliculaListadoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
