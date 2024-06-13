import { Injectable } from '@angular/core';
import { Unidades } from '../../shared/interfaces/iUnidades';

@Injectable({
  providedIn: 'root',
})
export class NossasUnidadesService {
  constructor() {}

  unidades: Unidades[] = [
    {
      id: '01',
      local: 'Capital',
      nome: 'Centro Universitário Senac - Santo Amaro',
    },
    { id: '02', local: 'Capital', nome: 'Aclimação' },
    { id: '03', local: 'Capital', nome: 'Francisco Matarazzo' },
    { id: '04', local: 'Capital', nome: 'Ana' },
    { id: '05', local: 'Capital', nome: 'Itaquera' },
    { id: '06', local: 'Capital', nome: 'Jabaquara' },
    { id: '07', local: 'Capital', nome: 'Jardim Primavera' },
    { id: '08', local: 'Capital', nome: 'Lapa Faustolo' },
    { id: '09', local: 'Capital', nome: 'Lapa Scipião' },
    { id: '10', local: 'Capital', nome: 'Lapa Tito' },
    { id: '11', local: 'Capital', nome: 'Largo Treze' },
    { id: '12', local: 'Capital', nome: 'Penha' },
    { id: '13', local: 'Capital', nome: 'Nações Unidas' },
    { id: '14', local: 'Capital', nome: 'Santana' },
    { id: '15', local: 'Capital', nome: 'São Miguel Paulista' },
    { id: '16', local: 'Capital', nome: 'Tatuapé Cel. Luís Americano' },
    { id: '17', local: 'Capital', nome: 'Tatuapé Serra de Bragança' },
    { id: '18', local: 'Capital', nome: 'Tiradentes' },
    { id: '19', local: 'Grande São Paulo e Litoral', nome: 'Bertioga' },
    {
      id: '20',
      local: 'Grande São Paulo e Litoral',
      nome: 'Guarulhos Celestino',
    },
    {
      id: '21',
      local: 'Grande São Paulo e Litoral',
      nome: 'Guarulhos Faccini',
    },
    { id: '22', local: 'Grande São Paulo e Litoral', nome: 'Osasco' },
    { id: '23', local: 'Grande São Paulo e Litoral', nome: 'Santos' },
    { id: '24', local: 'Grande São Paulo e Litoral', nome: 'Santo André' },
    {
      id: '25',
      local: 'Grande São Paulo e Litoral',
      nome: 'São Bernardo do Campo',
    },
    { id: '26', local: 'Grande São Paulo e Litoral', nome: 'Taboão da Serra' },
    { id: '27', local: 'Interior', nome: 'Americana' },
    { id: '28', local: 'Interior', nome: 'Araçatuba' },
    { id: '29', local: 'Interior', nome: 'Araraquara' },
    { id: '30', local: 'Interior', nome: 'Barretos' },
    { id: '31', local: 'Interior', nome: 'Bauru' },
    { id: '32', local: 'Interior', nome: 'Bebedouro' },
    { id: '33', local: 'Interior', nome: 'Botucatu' },
    { id: '34', local: 'Interior', nome: 'Campinas' },
    { id: '35', local: 'Interior', nome: 'Catanduva' },
    { id: '36', local: 'Interior', nome: 'Franca' },
    { id: '37', local: 'Interior', nome: 'Guaratinguetá' },
    { id: '38', local: 'Interior', nome: 'Itapetininga' },
    { id: '39', local: 'Interior', nome: 'Itapira' },
    { id: '40', local: 'Interior', nome: 'Itu' },
    { id: '41', local: 'Interior', nome: 'Jaboticabal' },
    { id: '42', local: 'Interior', nome: 'Jaú' },
    { id: '43', local: 'Interior', nome: 'Jundiaí' },
    { id: '44', local: 'Interior', nome: 'Limeira' },
    { id: '45', local: 'Interior', nome: 'Marília' },
  ];

  getUnidades(): Unidades[] {
    return this.unidades;
  }

  getUnidadesFiltro(strUnidade: string): Unidades[] {
    return this.unidades.filter((u) => u.local == strUnidade);
  }

  // getUnidadesGrandeSP(unidades: Unidades[]): Unidades[] {
  //   return unidades.filter(
  //     (unid) => unid.local == 'Grande São Paulo e Litoral'
  //   );
  // }

  // getUnidadesInterior(unidades: Unidades[]): Unidades[] {
  //   return unidades.filter((unid) => unid.local == 'Interior');
  // }
}
