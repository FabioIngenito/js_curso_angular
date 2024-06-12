import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClientesService } from '../../services/clientes/clientes.service';

@Component({
  selector: 'app-lista-de-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-de-clientes.component.html',
  styleUrl: './lista-de-clientes.component.css',
})
export class ListaDeClientesComponent {
  clientes: any = [];

  constructor(private clientesService: ClientesService) {}

  verificaService(): void {
    console.log('Método ativado');
    this.clientesService.verifica();
  }

  getData() {
    this.clientes = this.clientesService.getClientes();
  }
}
