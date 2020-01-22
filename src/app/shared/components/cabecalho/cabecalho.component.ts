import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../../services/autenticacao.service';
import { ActivatedRoute, Router } from '@angular/router';
declare var $ : any;

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  

  constructor(private autenticacaoService: AutenticacaoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Iniciliza os toolstips da página
    // para evitar erro na compilação é preciso realizar o cast do seletor para <any>
    $(function () {
      (<any>$('[data-toggle="tooltip"]')).tooltip();
    })
  }

  onLogout() {
    this.autenticacaoService.logout();
    this.router.navigate(['/']);
  }

}
