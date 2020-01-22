import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './shared/components/cabecalho/cabecalho.component';
import { LoginComponent } from './paginas/login/login.component';
import { AutenticacaoGuard } from './shared/guards/autenticacao.guard';
import { ParametrizacaoComponent } from './paginas/parametrizacao/parametrizacao.component';
import { ModalidadeResgateComponent } from './paginas/parametrizacao/modalidade-resgate/modalidade-resgate.component';
import { ParceiroComponent } from './paginas/parametrizacao/parceiro/parceiro.component';
import { LayoutComponent } from './paginas/layout.component';
import { MenuNavegacaoLateralComponent } from './shared/components/menu-navegacao-lateral/menu-navegacao-lateral.component';
import { MenuNavegacaoTopoComponent } from './shared/components/menu-navegacao-topo/menu-navegacao-topo.component';
import { ConstantesService } from './shared/services/constantes.service';
import { MenuFiltroPipe } from './shared/pipes/menu-filtro.pipe';
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CabecalhoComponent,
    ParametrizacaoComponent,
    ModalidadeResgateComponent,
    ParceiroComponent,
    LayoutComponent,
    MenuNavegacaoLateralComponent,
    MenuNavegacaoTopoComponent,
    MenuFiltroPipe,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ AutenticacaoGuard, ConstantesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
