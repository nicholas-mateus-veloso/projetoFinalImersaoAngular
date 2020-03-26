import { Cliente } from './cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url: string;

  constructor(
    private http: HttpClient,
  ) {
    this.url = `${environment.baseUrl}/cliente/`
   }

  consultar(nome: string) {
    return this.http.get(`${this.url}/consultar/${nome}`);
  }

  incluir(cliente: Cliente) {
    return this.http.post(`${this.url}/incluir`, cliente);
  }

  alterar(cliente: Cliente) {
    return this.http.patch(`${this.url}/incluir/alterarparcial`, cliente);
  }

  remover(cliente: Cliente) {
    return this.http.post(`${this.url}/remover`, cliente);
  }

}
