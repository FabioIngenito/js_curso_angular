import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Cliente } from './interfaces/iCliente';
import { Setor } from './interfaces/iSetor';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css',
})
export class CabecalhoComponent {
  setorForm = new FormGroup({
    setor: new FormControl('', Validators.required),
  });

  cliente: Cliente = {
    usuario: 'Rodrigo',
    estado: 'São Paulo',
    cep: '04341-060',
  };

  defaultSetor: string = 'TDS';
  setores: Setor[] = [
    { id: 'TDS', nome: 'Todos' },
    { id: 'INF', nome: 'Informática' },
    { id: 'COZ', nome: 'Cozinha' },
    { id: 'CAS', nome: 'Casa' },
    { id: 'CAR', nome: 'Carro' },
  ];
}
