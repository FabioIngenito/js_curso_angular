import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diretiva-ngstyle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrl: './diretiva-ngstyle.component.css',
})
export class DiretivaNgstyleComponent {
  tamanho = 40;
  cor = 'green';
  fonte = 'arial';
}
