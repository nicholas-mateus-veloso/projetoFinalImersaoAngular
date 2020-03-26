import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoComponent } from './produto/produto.component';
import { HomeComponent } from './home/home.component';
import { VendasComponent } from './vendas/vendas.component';
import { ClientemanterComponent } from './cliente/clientemanter/clientemanter.component';
import { ProdutomanterComponent } from './produto/produtomanter/produtomanter.component';
import { VendasmanterComponent } from './vendas/vendasmanter/vendasmanter.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutoComponent,
    LayoutComponent,
    ClienteComponent,
    VendasComponent,
    ClientemanterComponent,
    ProdutomanterComponent,
    VendasmanterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
