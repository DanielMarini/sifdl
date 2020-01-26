import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { AutenticacaoGuard } from './shared/guards/autenticacao.guard';
import { ParametrizacaoComponent } from './paginas/parametrizacao/parametrizacao.component';
import { ModalidadeResgateComponent } from './paginas/parametrizacao/modalidade-resgate/modalidade-resgate.component';
import { ParceiroComponent } from './paginas/parametrizacao/parceiro/parceiro.component';
import { LayoutComponent } from './paginas/layout.component';
import { CanalResgateComponent } from './paginas/parametrizacao/canal-resgate/canal-resgate.component';
import { CanalResgateFormularioComponent } from './paginas/parametrizacao/canal-resgate/canal-resgate-formulario.component';
import { ConstantesService } from './shared/services/constantes.service';



const routes: Routes = [
  {
    path: 'p', component: LayoutComponent, canActivate: [AutenticacaoGuard], data: { breadcrumb: 'Início', breadcrumbLink: true },
    children: [
      {
        path: 'parametrizacao', component: ParametrizacaoComponent, data: { breadcrumb: 'Parametrização', breadcrumbLink: false },
        children: [
          {
            path: 'canal-resgate', component: CanalResgateComponent, data: { breadcrumb: 'Canal de Resgate', breadcrumbLink: true },
            children: [
              { path: ':canal/editar', component: CanalResgateFormularioComponent, data: { breadcrumb: 'Editar', breadcrumbLink: true, acaoFormulario: ConstantesService.EDITAR } },
              { path: 'incluir', component: CanalResgateFormularioComponent, data: { breadcrumb: 'Incluir', breadcrumbLink: true, acaoFormulario: ConstantesService.INCLUIR } },
              { path: ':canal', component: CanalResgateFormularioComponent, data: { breadcrumb: 'Detalhar', breadcrumbLink: true, acaoFormulario: ConstantesService.DETALHAR }, },
              { path: "", redirectTo: "/p/parametrizacao/canal-resgate", pathMatch: "full" }
            ]
          },
          { path: 'modalidade-resgate', component: ModalidadeResgateComponent, data: { breadcrumb: 'Modalidade de Resgate', breadcrumbLink: true } },
          { path: 'parceiro', component: ParceiroComponent, data: { breadcrumb: 'Parceiro', breadcrumbLink: true } },
        ]
      },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
