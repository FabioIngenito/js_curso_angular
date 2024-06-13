import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from '../../shared/components/cabecalho/cabecalho.component';
import { InformacoesComponent } from '../../shared/components/informacoes/informacoes.component';
import { RodapeComponent } from '../../shared/components/rodape/rodape.component';

@Component({
  selector: 'app-o-que-fazemos',
  standalone: true,
  imports: [
    CommonModule,
    CabecalhoComponent,
    InformacoesComponent,
    RodapeComponent,
  ],
  templateUrl: './o-que-fazemos.component.html',
  styleUrl: './o-que-fazemos.component.css',
})
export class OQueFazemosComponent {}
