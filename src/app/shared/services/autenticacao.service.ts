import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private usuarioLogado: boolean = false;

  constructor() { }

  login(usuario: String, senha: string): boolean {
    if (usuario == "c083347" && senha == "123456") {
      this.usuarioLogado = true;
      return true;
    } else {
      this.usuarioLogado = false;
      return false;
    }
  }

  logout(): boolean {
    this.usuarioLogado = false;
    return false;
  }

  isUsuarioLogado(): boolean {
    return this.usuarioLogado;
  }
}
