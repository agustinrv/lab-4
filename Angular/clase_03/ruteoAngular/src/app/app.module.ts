import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidosComponent } from './general/page/bienvenidos/bienvenidos.component';
import { PageNotFoundComponent } from './general/page/page-not-found/page-not-found.component';
import { LoginComponent } from './ingreso/page/login/login.component';
import { RegistroComponent } from './ingreso/page/registro/registro.component';
import { ContactoComponent } from './contacto/contacto.component';
import { VentanaCuidadoComponent } from './general/componente/ventana-cuidado/ventana-cuidado.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidosComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegistroComponent,
    ContactoComponent,
    VentanaCuidadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
