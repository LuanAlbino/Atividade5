import { Component, NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AgendamentoComponent } from './pagina/agendamento/agendamento.component';
import { ConteudoComponent } from './conteudo/conteudo.component';

export const routes: Routes = [
   {path:'conteudo', component:ConteudoComponent},
   {path: 'agendamento', component: AgendamentoComponent,
    title: 'agendamentos'
   },
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule{}
