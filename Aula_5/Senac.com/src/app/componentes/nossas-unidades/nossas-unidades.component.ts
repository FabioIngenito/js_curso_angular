import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from '../../shared/components/cabecalho/cabecalho.component';
import { InformacoesComponent } from '../../shared/components/informacoes/informacoes.component';
import { RodapeComponent } from '../../shared/components/rodape/rodape.component';
import { NossasUnidadesService } from '../../servicos/nossas-unidades/nossas-unidades.service';
import { Unidades } from '../../shared/interfaces/iUnidades';

@Component({
  selector: 'app-nossas-unidades',
  standalone: true,
  imports: [
    CommonModule,
    CabecalhoComponent,
    InformacoesComponent,
    RodapeComponent,
  ],
  templateUrl: './nossas-unidades.component.html',
  styleUrl: './nossas-unidades.component.css',
})
export class NossasUnidadesComponent {
  unidades: Unidades[] = this.nossasUnidadesService.getUnidades();
  unidadesCapital: Unidades[] =
    this.nossasUnidadesService.getUnidadesFiltro('Capital');
  unidadesGrandeSP: Unidades[] = this.nossasUnidadesService.getUnidadesFiltro(
    'Grande São Paulo e Litoral'
  );
  unidadesInterior: Unidades[] =
    this.nossasUnidadesService.getUnidadesFiltro('Interior');

  constructor(private nossasUnidadesService: NossasUnidadesService) {}

  getData(): any {
    return (this.unidades = this.nossasUnidadesService.getUnidades());
  }

  getDataCapital() {
    this.unidadesCapital =
      this.nossasUnidadesService.getUnidadesFiltro('Capital');
  }

  getDataGrandeSP() {
    this.unidadesGrandeSP = this.nossasUnidadesService.getUnidadesFiltro(
      'Grande São Paulo e Litoral'
    );
  }

  getDataInterior() {
    this.unidadesInterior =
      this.nossasUnidadesService.getUnidadesFiltro('Interior');
  }
}
