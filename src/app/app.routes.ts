import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'produto/:id', component: DetalheProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
