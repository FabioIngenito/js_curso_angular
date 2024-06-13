import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from '../../shared/components/cabecalho/cabecalho.component';
import { InformacoesComponent } from '../../shared/components/informacoes/informacoes.component';
import { RodapeComponent } from '../../shared/components/rodape/rodape.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
    CabecalhoComponent,
    InformacoesComponent,
    RodapeComponent,
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {}
