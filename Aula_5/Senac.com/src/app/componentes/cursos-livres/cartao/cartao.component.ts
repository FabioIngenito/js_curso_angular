import { Component } from '@angular/core';
import { Cursos } from '../../../shared/interfaces/iCursos';

@Component({
  selector: 'app-cartao',
  standalone: true,
  imports: [],
  templateUrl: './cartao.component.html',
  styleUrl: './cartao.component.css',
})
export class CartaoComponent {
  cursos: Cursos[] = [
    {
      id: 'ARDAV',
      foto: '../../../../../assets/cursoArduinoAvancado.jpg',
      tipo: 'Livre | Presencial',
      nome: 'Arduino Avancado',
    },
    {
      id: 'DEWEB',
      foto: '../../../../../assets/cursoDesenvolvedorWeb.jpg',
      tipo: 'Livre | Presencial',
      nome: 'Desenvolvedor Web Front-end 1: HTML e CSS',
    },
    {
      id: 'NUVEM',
      foto: '../../../../../assets/cursoDesenvolvimentoNuvem.jpg',
      tipo: 'Livre | Presencial',
      nome: 'Desenvolvimento de Solucoes IoT na Nuvem',
    },
    {
      id: 'INTRO',
      foto: '../../../../../assets/cursoIntroducaoProgramacao.jpg',
      tipo: 'Livre | Presencial',
      nome: 'Introdução à Pratica da Programacao',
    },
  ];
}
