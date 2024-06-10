import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [EventosComponent, CommonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css',
})
export class EventosComponent {
  mostrar: boolean = false;
  bgColor = '#ffffff'; // Cor de fundo inicial

  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      this.bgColor;
  }

  mostrarMensagem(): void {
    //console.log('Método chamado');
    this.mostrar = !this.mostrar;
  }

  changeBackgroundColor(): void {
    const randomColor = this.getRandomColor();
    this.bgColor = randomColor;
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      this.bgColor;
  }

  private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }
}
