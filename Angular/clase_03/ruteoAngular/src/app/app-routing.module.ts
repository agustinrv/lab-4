import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { BienvenidosComponent } from './general/page/bienvenidos/bienvenidos.component';
import { PageNotFoundComponent } from './general/page/page-not-found/page-not-found.component';

const routes: Routes = [

{path : "Bienvenido" , component:BienvenidosComponent},
{path : "page-not-found",component:PageNotFoundComponent},
{ path: 'contacto' ,component:ContactoComponent },

  { path: '',   redirectTo: '/Bienvenido', pathMatch: 'full'},
  { path: 'ingreso', loadChildren: () => import('./ingreso/ingreso.module').then(m => m.IngresoModule) },
  { path: '**' ,component:PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
