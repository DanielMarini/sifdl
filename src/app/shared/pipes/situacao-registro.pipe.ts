import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'situacaoRegistro'
})
export class SituacaoRegistroPipe implements PipeTransform {

  transform(situacao: any, atributo: string ): any {
    let result: string;

    if (atributo == 'CANAL_RESGATE') {
        if (situacao == 0 ) {
          result = 'Ativo';
        } else {
          result = 'Inativo';
        }
    }
    return result;
  }
}
