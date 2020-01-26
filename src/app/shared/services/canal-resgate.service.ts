import { Injectable } from '@angular/core';
import { CanalResgate } from '../classes/canal-resgate';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CanalResgateService {

  private mockListaCanalResgate: CanalResgate[] = [
    { nome:"SIACM", descricao:"App Cartões", usuarioServico:"SACMPCST", clienteApi:"cli-ser-acm", situacao:"0"   },
    { nome:"SIIBC", descricao:"Internet Banking", usuarioServico:"SIBCPCST", clienteApi:"cli-ser-nbc", situacao:"0"   },
    { nome:"SIATC", descricao:"Atendimento de Cartões de Crédito", usuarioServico:"SATCPCST", clienteApi:"cli-ser-atc", situacao:"1"   }
  ];

  constructor() { }

  listaCanalResgate(): Observable<CanalResgate[]> {
    return of(this.mockListaCanalResgate.slice());
  }

  getCanalResgate(nomeCanal: string): Observable<CanalResgate> {
    return of(this.mockListaCanalResgate.slice().find( entry => entry.nome == nomeCanal));
  }

}
