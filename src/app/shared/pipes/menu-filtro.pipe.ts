import { Pipe, PipeTransform } from '@angular/core';
import { ItemMenu } from '../interfaces/item-menu';

@Pipe({
  name: 'menuFiltro'
})
export class MenuFiltroPipe implements PipeTransform {

  transform(itens: ItemMenu[], filtro: String): any {
    return itens.filter(item => item.menu.toLowerCase().indexOf(filtro.toLowerCase()) !== -1);
  }

}
