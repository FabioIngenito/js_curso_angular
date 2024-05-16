import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from '../app/components/desktop_1/cabecalho/cabecalho.component';
import { BuscaComponent } from '../app/components/desktop_1/busca/busca.component';
import { CorpoComponent } from '../app/components/desktop_1/corpo/corpo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabecalhoComponent, BuscaComponent, CorpoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ManeDelivery';
}
