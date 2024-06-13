import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuerSaberComponent } from './componentes/quer-saber/quer-saber.component';
import { CursosLivresComponent } from './componentes/cursos-livres/cursos-livres.component';
import { OQueFazemosComponent } from './componentes/o-que-fazemos/o-que-fazemos.component';
import { NossasUnidadesComponent } from './componentes/nossas-unidades/nossas-unidades.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

import { CabecalhoComponent } from './shared/components/cabecalho/cabecalho.component';
import { InformacoesComponent } from './shared/components/informacoes/informacoes.component';
import { RodapeComponent } from './shared/components/rodape/rodape.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    QuerSaberComponent,
    CursosLivresComponent,
    OQueFazemosComponent,
    NossasUnidadesComponent,
    FormularioComponent,
    CabecalhoComponent,
    InformacoesComponent,
    RodapeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Senac.com';
}
