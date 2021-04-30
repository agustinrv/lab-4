import { BusquedaComponent } from './busqueda/busqueda.component';
import { ActorAltaComponent } from './actor/actor-alta/actor-alta.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisesComponent } from './paises/paises.component';

const routes: Routes = [
  { path: '', redirectTo: '/busqueda', pathMatch: 'full' },
  {path:"busqueda",component:BusquedaComponent},
  {path:"paises" , component:PaisesComponent},
  {
    path: 'actor',
    children:
    [
      { path: 'alta', component: ActorAltaComponent }
    ]
    
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
