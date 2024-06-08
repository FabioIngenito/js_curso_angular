import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor() {}

  verifica() {
    console.log('Service Injetada');
  }

  getClientes() {
    return [
      { id: 1, nome: 'Rodrigo', idade: 42 },
      { id: 2, nome: 'Angela', idade: 28 },
      { id: 3, nome: 'Letícia', idade: 18 },
    ];
  }
}
