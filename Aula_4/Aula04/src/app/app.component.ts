import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { DiretivaNgstyleComponent } from './components/diretiva-ngstyle/diretiva-ngstyle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DiretivasComponent, DiretivaNgstyleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Aula04';
}
