import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/shared/services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl: string;

  constructor(private autenticacaoService: AutenticacaoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['redirect'] || '/p';
    if (this.autenticacaoService.isUsuarioLogado()) {
      this.router.navigate(['/p']);
    }
  }

  login(usuario: string, senha: string) {
    if (this.autenticacaoService.login(usuario, senha)) {
        this.router.navigate([this.returnUrl]);
    }
  }
}
