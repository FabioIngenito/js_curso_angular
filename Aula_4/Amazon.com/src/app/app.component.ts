import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { OpcoesComponent } from './components/opcoes/opcoes.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InformativoComponent } from './components/informativo/informativo.component';
import { RodapeComponent } from './components/rodape/rodape.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CabecalhoComponent,
    OpcoesComponent,
    CarrinhoComponent,
    InicioComponent,
    InformativoComponent,
    RodapeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Amazon.com';
}
