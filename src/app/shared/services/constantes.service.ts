import { Injectable } from '@angular/core';
import { ItemMenu } from '../interfaces/item-menu';

@Injectable({
  providedIn: 'root'
})
export class ConstantesService {

  readonly itensMenu: ItemMenu[] = 
    [ { menu:'GESTAO_CLIENTE', texto:'Cliente', path:'/p/gestao-cliente/cliente'},
      { menu:'GESTAO_CLIENTE', texto:'Resgatar', path:'/p/gestao-cliente/resgatar'},
      { menu:'GESTAO_CLIENTE', texto:'Transferir', path:'/p/gestao-cliente/transferir'},
      { menu:'GESTAO_CLIENTE', texto:'Modificar Pontuação', path:'/p/gestao-cliente/modificar-pontuacao'},
      { menu:'GESTAO_CLIENTE', texto:'Controla Pontuação', path:'/p/gestao-cliente/controla-pontuacao'},
      { menu:'PARAMETRIZACAO', texto:'Produto', path:'/p/parametrizacao/produto' },
      { menu:'PARAMETRIZACAO', texto:'Parceiro', path:'/p/parametrizacao/parceiro'},
      { menu:'PARAMETRIZACAO', texto:'Modalidade de Resgate', path:'/p/parametrizacao/modalidade-resgate' },
      { menu:'PARAMETRIZACAO', texto:'Canal de Resgate', path:'/p/parametrizacao/canal-resgate' },
      { menu:'PARAMETRIZACAO', texto:'Dupla Custódia', path:'/p/parametrizacao/dupla-custodia' },
      { menu:'ADMINISTRACAO', texto:'Emitir relatório', path:'/p/administracao/relatorio'},
      { menu:'ADMINISTRACAO', texto:'Consultar Log de Auditoria', path:'/p/administracao/auditoria' },
      { menu:'ADMINISTRACAO', texto:'Manter perfis do sistema', path:'/p/administracao/perfis' },
    ];

  constructor() { }
}
