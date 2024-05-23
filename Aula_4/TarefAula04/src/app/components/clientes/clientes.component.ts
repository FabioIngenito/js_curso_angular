import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css',
})
export class ClientesComponent {
  pessoa = {
    nome: 'Fabio',
    sobrenome: 'I',
    dataNascimento: '01/01/1979',
    endereco: 'Rua',
    CEP: '05010',
    cidade: 'São Paulo',
    estado: 'SP',
  };
}
