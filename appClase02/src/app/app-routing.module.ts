import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChatComponent} from './pages/chat/chat.component';
import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [
  {path:"charla",component:ChatComponent},
  {path:"listado",component:ListadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
