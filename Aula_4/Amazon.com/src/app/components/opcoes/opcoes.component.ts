import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-opcoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './opcoes.component.html',
  styleUrl: './opcoes.component.css',
})
export class OpcoesComponent {
  opcoes = [
    { id: 'TODO', nome: 'Todos' },
    { id: 'VEND', nome: 'Venda na Amazon' },
    { id: 'KIND', nome: 'eBooks Kindle' },
    { id: 'NOVA', nome: 'Comprar novamente' },
    { id: 'OFER', nome: 'Ofertas do dia' },
    { id: 'LIVR', nome: 'Livros' },
  ];
}
