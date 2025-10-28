import { Component, OnInit, inject } from '@angular/core';
import { LojaService } from './loja-service';
import { Produto } from './produto';
import { DecimalPipe, NgFor, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css'],
  imports: [DecimalPipe, NgFor, CommonModule, RouterModule]
})

export class InicioComponent implements OnInit {
  produtos: Produto[] = [];
  private lojaService = inject(LojaService);

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.lojaService.obterProdutos().subscribe({
      next: (dados) => this.produtos = dados,
      error: (erro) => console.error('Erro ao carregar produtos:', erro)
    });
  }
}
