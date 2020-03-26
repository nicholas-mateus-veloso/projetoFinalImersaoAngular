import { Produto } from './produto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url: string;

  constructor(
    private http: HttpClient
  ) { 
    this.url = `${environment.baseUrl}/produto`
  }

  pesquisar(nome) {
    return this.http.get(`${this.url}/consultar/${nome}`);
  }

  incluir(produto: Produto) {
    return this.http.post(`${this.url}/incluir`, produto);
  }

  alterar(produto: Produto) {
    return this.http.patch(`${this.url}/alterarparcial`, produto);
  }

  remover(produto: Produto) {
    return this.http.post(`${this.url}/remover`, produto);
  }  
}
