import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from './interfaces/iProduto';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css',
})
export class CarrinhoComponent {
  produto: Produto[] = [
    {
      nome: 'AirPods (3.ª geração)',
      imagem: 'image 1.jpg',
      estoque: true,
      vendidoPor: 'Apple Store',
      cor: 'Branca',
      dimensoes: '4.6 x 2.1 x 5.4 cm',
      preco: 1598.0,
    },
    {
      nome: 'Apple iPhone 15 (128 GB) — Preto',
      imagem: 'image 2.jpg',
      estoque: true,
      vendidoPor: 'Apple Store',
      cor: 'Grafite',
      dimensoes: '147.6 x 71.6 x 7.8 cm',
      preco: 4848.0,
    },
    {
      nome: 'Geladeira Frost Free Brastemp 375L',
      imagem: 'image 3.jpg',
      estoque: false,
      vendidoPor: 'Brastemp',
      cor: 'Inox',
      dimensoes: '74 x 64 x 180 cm',
      preco: 3199.0,
    },
    {
      nome: 'Samsung Smart TV 55" UHD 4K',
      imagem: 'image 4.jpg',
      estoque: true,
      vendidoPor: 'Samsung',
      cor: 'Preto',
      dimensoes: '138.6 x 82.8 x 15.9 cm',
      preco: 2749.0,
    },
  ];

  total: number = this.produto.reduce((acc, curr) => acc + curr.preco, 0);
  frete: number = 20;
  totalFrete: number = this.total + this.frete;
}
