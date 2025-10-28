import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LojaService } from '../loja-service';
import { Produto } from '../produto';

@Component({
  selector: 'app-detalhe-produto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalhe-produto.html',
  styleUrls: ['./detalhe-produto.css']
})
export class DetalheProdutoComponent implements OnInit {
  produto?: Produto;

  constructor(
    private route: ActivatedRoute,
    private lojaService: LojaService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.lojaService.obterProdutoPorId(id).subscribe({
      next: (data) => {
        this.produto = data; 
      },
      error: (err) => {
        console.error('Erro ao carregar produto:', err);
      }
    });
  }
}
