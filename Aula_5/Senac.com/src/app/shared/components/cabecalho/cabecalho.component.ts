import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Opcoes } from '../../interfaces/iOpcoes';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css',
})
export class CabecalhoComponent {
  mostrarCurso: boolean = false;
  mostrarSenac: boolean = false;
  mostrarUnida: boolean = false;

  opcoes: Opcoes[] = [
    { id: 'CURSO', nome: 'Cursos', path: 'cursos-livres' },
    { id: 'SENAC', nome: 'O Senac', path: 'o-que-fazemos' },
    { id: 'UNIDA', nome: 'Unidades', path: 'nossas-unidades' },
  ];

  mostrarTela(mostrar: boolean): boolean {
    mostrar = !mostrar;
    return mostrar;
  }
}
