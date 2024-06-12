import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClienteFilterAppService } from '../../services/cliente-filter-app/cliente-filter-app.service';

@Component({
  selector: 'app-cliente-filter-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cliente-filter-app.component.html',
  styleUrl: './cliente-filter-app.component.css',
})
export class ClienteFilterAppComponent {
  clientes: any = [];
  clientesAdultos: any = [];
  clientesAdultos2: any = [];

  constructor(private clienteFilterAppService: ClienteFilterAppService) {}

  getData() {
    this.clientes = this.clienteFilterAppService.getClientes();
    console.log(typeof this.clientes);
  }

  getDataAdultos() {
    this.clientesAdultos = this.clienteFilterAppService.getClientesAdultos(
      this.clienteFilterAppService.getClientes()
    );
  }

  getDataAdultos2() {
    this.clientesAdultos2 = this.clienteFilterAppService.getClientesAdultos2();
  }
}
