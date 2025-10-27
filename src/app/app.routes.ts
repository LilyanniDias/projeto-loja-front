import { Routes } from '@angular/router';
import { InicioComponent } from './inicio';
import { DetalheProduto } from './detalhe-produto/detalhe-produto';

export const routes: Routes = [
  { path: '', component: InicioComponent }, // rota inicial
  { path: 'produto/:id', component: DetalheProduto } // rota inicial
];
