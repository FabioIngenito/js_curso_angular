import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from '../../shared/components/cabecalho/cabecalho.component';
import { InformacoesComponent } from '../../shared/components/informacoes/informacoes.component';
import { RodapeComponent } from '../../shared/components/rodape/rodape.component';

@Component({
  selector: 'app-quer-saber',
  standalone: true,
  imports: [
    CommonModule,
    CabecalhoComponent,
    InformacoesComponent,
    RodapeComponent,
  ],
  templateUrl: './quer-saber.component.html',
  styleUrl: './quer-saber.component.css',
})
export class QuerSaberComponent {}
