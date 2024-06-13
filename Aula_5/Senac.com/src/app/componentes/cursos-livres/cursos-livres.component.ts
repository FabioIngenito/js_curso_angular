import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from '../../shared/components/cabecalho/cabecalho.component';
import { InformacoesComponent } from '../../shared/components/informacoes/informacoes.component';
import { RodapeComponent } from '../../shared/components/rodape/rodape.component';
import { CartaoComponent } from './cartao/cartao.component';
@Component({
  selector: 'app-cursos-livres',
  standalone: true,
  imports: [
    CommonModule,
    CabecalhoComponent,
    InformacoesComponent,
    RodapeComponent,
    CartaoComponent,
  ],
  templateUrl: './cursos-livres.component.html',
  styleUrl: './cursos-livres.component.css',
})
export class CursosLivresComponent {}
