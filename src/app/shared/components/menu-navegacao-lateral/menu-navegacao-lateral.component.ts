import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConstantesService } from '../../services/constantes.service';
import { ItemMenu } from '../../interfaces/item-menu';


@Component({
  selector: 'app-menu-navegacao-lateral',
  templateUrl: './menu-navegacao-lateral.component.html',
  styleUrls: ['./menu-navegacao-lateral.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MenuNavegacaoLateralComponent implements OnInit {

  itensMenu: ItemMenu[] = null;

  constructor() {
    
  }

  ngOnInit() {
    this.itensMenu = ConstantesService.MENU_ITENS;
  }

}
