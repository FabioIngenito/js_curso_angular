import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeuPrimeiroComponenteComponent } from '../app/components/meu-primeiro-componente/meu-primeiro-componente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MeuPrimeiroComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

// Trabalhar com dados de BackEnd AQUI!
export class AppComponent {
  title = 'HelloWorld';
}
