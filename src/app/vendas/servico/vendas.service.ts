import { Vendas } from './vendas';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  private url: string;

  constructor(
    private http: HttpClient
  ) { 
    this.url = `${environment.baseUrl}/venda`
  }

  consultar(codigoCliente: string) {        
    return this.http.get(`${this.url}/consultar/${codigoCliente}`);
  }

  incluir(vendas: Vendas) {        
    return this.http.post(`${this.url}/incluir`, vendas);
  }

  alterar(vendas: Vendas) {        
    return this.http.patch(`${this.url}/alterarparcial`, vendas);
  }

  remover(vendas: Vendas) {      
    return this.http.post(`${this.url}/remover`, vendas);    
  }

}
