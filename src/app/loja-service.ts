import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class LojaService {
  private APIURL = 'http://localhost:3000';
  private http = inject(HttpClient);

  // Retorna uma lista de produtos
  obterProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.APIURL}/produtos`);
  }

  // Retorna apenas um produto pelo ID
  obterProdutoPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.APIURL}/produtos/${id}`);
  }
}
