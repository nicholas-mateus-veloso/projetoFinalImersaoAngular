import { ProdutoService } from './../../produto/servico/produto.service';
import { VendasService } from './../servico/vendas.service';
import { Router } from '@angular/router';
import { Produto } from './../../produto/servico/produto';
import { VendasProduto } from './../servico/vendasProduto';
import { Vendas } from './../servico/vendas';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/cliente/servico/cliente';
import { ClienteService } from 'src/app/cliente/servico/cliente.service';

@Component({
  selector: 'app-vendasmanter',
  templateUrl: './vendasmanter.component.html',
  styleUrls: ['./vendasmanter.component.css']
})
export class VendasmanterComponent implements OnInit {

  operacao: string = 'Incluir';
  vendas: Vendas = new Vendas();
  vendasProdutos: VendasProduto = new VendasProduto();

  listaCliente: Cliente[] = [];
  listaProduto: Produto[] = [];

  constructor(
    private router: Router,
    private vendasService: VendasService,
    private produtoService: ProdutoService,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.clienteService.consultar('').subscribe(
      data => {
        this.listaCliente = <Cliente[]>data;
      }
    );

    this.produtoService.pesquisar('').subscribe(
      data => {
        this.listaProduto = <Produto[]>data;
      }
    );
  }

  voltar() {
    this.router.navigate(['/vendas']);
  }

  incluir() {
    this.vendasService.incluir(this.vendas).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/matricula']);
      }
    );
  }

  adicionar() {
    this.vendas.listaVendasProduto.push(this.vendasProdutos);
    this.vendasProdutos = new VendasProduto();
  }

  removercurso(vendasProdutos) {
    this.vendas.listaVendasProduto = this.vendas.listaVendasProduto.filter(obj => obj !== vendasProdutos);
  }
}
