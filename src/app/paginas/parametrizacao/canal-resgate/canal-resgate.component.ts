import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CanalResgateService } from 'src/app/shared/services/canal-resgate.service';
import { CanalResgate } from 'src/app/shared/classes/canal-resgate';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-canal-resgate',
  templateUrl: './canal-resgate.component.html',
  styleUrls: ['./canal-resgate.component.css']
})
export class CanalResgateComponent implements OnInit {

  listaCanalResgate: Observable<CanalResgate[]>;

  isPaginar: boolean = false;

  constructor(private canalResgateService: CanalResgateService, public route: ActivatedRoute) { }

  ngOnInit() {
    this._listarCanalResgate();
  }


  _listarCanalResgate(){
    this.canalResgateService.listaCanalResgate().subscribe (
      (resultado: CanalResgate[]) => {
        this.listaCanalResgate = of(resultado).pipe( map( (lista: CanalResgate[]) => lista ) );
      }
    );
  }
}
