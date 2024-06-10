import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaDeClientesComponent } from './componentes/lista-de-clientes/lista-de-clientes.component';
import { ClienteFilterAppComponent } from './componentes/cliente-filter-app/cliente-filter-app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaDeClientesComponent, ClienteFilterAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'services';
}
