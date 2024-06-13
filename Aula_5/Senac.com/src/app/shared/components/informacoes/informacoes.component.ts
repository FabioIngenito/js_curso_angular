import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Opcoes } from '../../interfaces/iOpcoes';

@Component({
  selector: 'app-informacoes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './informacoes.component.html',
  styleUrl: './informacoes.component.css',
})
export class InformacoesComponent {
  opcoes: Opcoes[] = [
    { id: 'CURSO', nome: 'Cursos', path: 'cursos-livres' },
    { id: 'SENAC', nome: 'O Senac', path: 'o-que-fazemos' },
    { id: 'UNIDA', nome: 'Unidades', path: 'nossas-unidades' },
  ];
}
