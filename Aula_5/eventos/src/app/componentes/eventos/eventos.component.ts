import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [EventosComponent, CommonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css',
})
export class EventosComponent {
  mostrar: boolean = false;

  mostrarMensagem(): void {
    //console.log('Método chamado');
    this.mostrar = !this.mostrar;
  }
}
