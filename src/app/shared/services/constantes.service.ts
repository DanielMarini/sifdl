import { Injectable } from '@angular/core';
import { ItemMenu } from '../interfaces/item-menu';

@Injectable({
  providedIn: 'root'
})
export class ConstantesService {

  readonly itensMenu: ItemMenu[] = 
    [ { menu:'GESTAO_CLIENTE', texto:'Cliente', path:'/p/gestao-cliente/cliente', tooltip: 'Consultar / Adesão / Cancelamento' },
      { menu:'GESTAO_CLIENTE', texto:'Resgatar', path:'/p/gestao-cliente/resgatar', tooltip: 'Efetivar e consultar resgates' },
      { menu:'GESTAO_CLIENTE', texto:'Transferir', path:'/p/gestao-cliente/transferir', tooltip: 'Efetivar e consultar transferências entre clientes' },
      { menu:'GESTAO_CLIENTE', texto:'Modificar Pontuação', path:'/p/gestao-cliente/modificar-pontuacao', tooltip: 'Creditar e debitar pontos' },
      { menu:'GESTAO_CLIENTE', texto:'Controla Pontuação', path:'/p/gestao-cliente/controla-pontuacao', tooltip: 'Antecipar e Prorrogar vigência dos pontos' },
      { menu:'PARAMETRIZACAO', texto:'Produto', path:'/p/parametrizacao/produto', tooltip: 'Parâmetros de:<br>Fator de conversão<br>Resgate<br>Transferência<br>Vigência dos pontos<br>...' },
      { menu:'PARAMETRIZACAO', texto:'Parceiro', path:'/p/parametrizacao/parceiro', tooltip: '' },
      { menu:'PARAMETRIZACAO', texto:'Modalidade de Resgate', path:'/p/parametrizacao/modalidade-resgate', tooltip: '' },
      { menu:'PARAMETRIZACAO', texto:'Canal de Resgate', path:'/p/parametrizacao/canal-resgate', tooltip: '' },
      { menu:'PARAMETRIZACAO', texto:'Dupla Custódia', path:'/p/parametrizacao/dupla-custodia', tooltip: '' },
      { menu:'ADMINISTRACAO', texto:'Emitir relatório', path:'/p/administracao/relatorio', tooltip: '' },
      { menu:'ADMINISTRACAO', texto:'Consultar Log de Auditoria', path:'/p/administracao/auditoria', tooltip: '' },
      { menu:'ADMINISTRACAO', texto:'Manter perfis do sistema', path:'/p/administracao/perfis', tooltip: '' },
    ];

  constructor() { }
}
