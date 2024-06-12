import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClienteFilterAppService {
  constructor() {}

  clientes: object = [
    { id: 1, nome: 'João', idade: 25 },
    { id: 2, nome: 'Maria', idade: 17 },
    { id: 3, nome: 'Pedro', idade: 30 },
    { id: 4, nome: 'Ana', idade: 16 },
    { id: 5, nome: 'Carlos', idade: 20 },
    { id: 6, nome: 'Laura', idade: 22 },
    { id: 7, nome: 'Lucas', idade: 18 },
    { id: 8, nome: 'Pernanda', idade: 19 },
    { id: 9, nome: 'Paula', idade: 21 },
    { id: 10, nome: 'Roberta', idade: 15 },
  ];

  getClientes(): any {
    return this.clientes;
  }

  getClientesAdultos(clientes: any[]): object[] {
    return clientes.filter((cli) => cli.idade > 18);
  }

  getClientesAdultos2(): object[] {
    return this.getClientes().filter(
      (cli2: { idade: number }) => cli2.idade > 18
    );
  }
}
