import { Component, OnInit } from '@angular/core';
import { ItemMenu } from '../../interfaces/item-menu';
import { ConstantesService } from '../../services/constantes.service';

@Component({
  selector: 'app-menu-navegacao-topo',
  templateUrl: './menu-navegacao-topo.component.html',
  styleUrls: ['./menu-navegacao-topo.component.css']
})
export class MenuNavegacaoTopoComponent implements OnInit {

  itensMenu: ItemMenu[] = null;

  constructor(private _constantes: ConstantesService) {
    this.itensMenu = this._constantes.itensMenu;
  }

  ngOnInit() {
  }

}
