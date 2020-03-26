import { Cliente } from './../cliente/servico/cliente';
import { VendasService } from './servico/vendas.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Vendas } from './servico/vendas';
import { ClienteService } from '../cliente/servico/cliente.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {

  vendas: Vendas = new Vendas();
  
  selecionado: Vendas;

  listaVendasProduto: Vendas[] = [];

  listaCliente: Cliente[] = [];

  constructor(
    private router: Router,
    private vendasService: VendasService,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.clienteService.consultar('').subscribe(
      data => {
        this.listaCliente = <Cliente[]>data;
      }
    );
    
    let codigoCliente = '';
    if(this.vendas.cliente != null) {
      codigoCliente = this.vendas.cliente.codigo;
    }
    this.vendasService.pesquisar(codigoCliente).subscribe(
      data => {
        this.listaVendasProduto = <Vendas[]>data;
      }
    );
  }

  pesquisar() {
    let codigoCliente = '';
    if(this.vendas.cliente !== null) {
      codigoCliente = this.vendas.cliente.codigo;
    }

    this.vendasService.pesquisar(codigoCliente).subscribe(
      data => {
        this.listaVendasProduto = <Vendas[]>data;
      }
    );
  }

  incluir() {
    this.router.navigate(['/vendas/incluir']);
  }

  alterar() {
    this.router.navigate(['/vendas/alterar/' + this.selecionado.cliente.codigo]);
  }

  remover() {
    this.vendasService.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );
  }

  selecionar(valor) {
    this.selecionado = valor;
  }

}
