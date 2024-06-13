import { Routes } from '@angular/router';
import { QuerSaberComponent } from './componentes/quer-saber/quer-saber.component';
import { CursosLivresComponent } from './componentes/cursos-livres/cursos-livres.component';
import { OQueFazemosComponent } from './componentes/o-que-fazemos/o-que-fazemos.component';
import { NossasUnidadesComponent } from './componentes/nossas-unidades/nossas-unidades.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

export const routes: Routes = [
  { path: 'quer-saber', component: QuerSaberComponent },
  { path: 'cursos-livres', component: CursosLivresComponent },
  { path: 'o-que-fazemos', component: OQueFazemosComponent },
  { path: 'nossas-unidades', component: NossasUnidadesComponent },
  { path: 'formulario', component: FormularioComponent },
];
