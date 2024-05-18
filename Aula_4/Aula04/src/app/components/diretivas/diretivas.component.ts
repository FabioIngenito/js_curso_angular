import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diretivas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diretivas.component.html',
  styleUrl: './diretivas.component.css',
})
export class DiretivasComponent {
  idade: number = 18;
  nome: string = 'Fabio';
  arrEst = ['SP', 'RJ', 'MG', 'ES'];

  pessoa = {
    name: 'FabioI',
    age: 19,
    estado: 'SP',
  };

  lista = ['São Paulo', 'Palmeiras', 'Santos', 'Corinthians'];

  clientes = [
    { nome: 'Rodrigo', idade: 42, estado: 'SP' },
    { nome: 'Angela', idade: 39, estado: 'RJ' },
    { nome: 'Leticia', idade: 3, estado: 'SP' },
  ];

  pessoa1 = {
    nome: 'João',
    idade: 17,
    sexo: 'M',
  };

  pessoa2 = {
    nome: 'José',
    idade: 18,
    sexo: 'M',
  };

  pessoa3 = {
    nome: 'Maria',
    idade: 19,
    sexo: 'F',
  };

  clientes2 = [this.pessoa1, this.pessoa2, this.pessoa3];

  titulo = ['cor-titulo', 'font-titulo'];

  cor: string = 'blue';
  fonte: string = 'arial';
}
