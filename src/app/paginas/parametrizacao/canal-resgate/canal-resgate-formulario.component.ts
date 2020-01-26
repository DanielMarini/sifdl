import { Component, OnInit, ViewEncapsulation, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FuncoesService } from 'src/app/shared/services/funcoes.service';
import { ConstantesService } from 'src/app/shared/services/constantes.service';
import { CanalResgateService } from 'src/app/shared/services/canal-resgate.service';
import { CanalResgate } from 'src/app/shared/classes/canal-resgate';
import { Location } from '@angular/common';

@Component({
  selector: 'app-canal-resgate-formulario',
  templateUrl: './canal-resgate-formulario.component.html',
  styleUrls: ['./canal-resgate-formulario.component.css']
})
export class CanalResgateFormularioComponent implements OnInit {

  canalResgateForm: FormGroup;
  mapaErroFormulario: Map<string, string> = new Map();
  listaErroFormulario: Set<string> = new Set();
  paramCanal: string;
  canalPesquisa: CanalResgate;

  acaoFormulario: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private _location: Location, private canalResgateService: CanalResgateService) {
    this.acaoFormulario = this.activatedRoute.routeConfig.data.acaoFormulario;
    this._inicializarFormulario();
  }

  ngOnInit() {
    if (this.activatedRoute.routeConfig && this.activatedRoute.routeConfig.data) {
      this.acaoFormulario = this.activatedRoute.routeConfig.data.acaoFormulario;

      if (this.acaoFormulario != ConstantesService.INCLUIR) {
        this.activatedRoute.params.subscribe(
          (param: Params) => {
            if (param['canal']) {
              this.paramCanal = param['canal'];
              this.canalResgateService.getCanalResgate(this.paramCanal).subscribe(
                (canal: CanalResgate) => {
                  this.canalPesquisa = canal;
                  this._inicializarFormulario(canal);
                }
              );
            }
          }
        )
      }
    }
  }

  onFormChanges(): void {
    this.canalResgateForm.valueChanges.subscribe(val => {
      this.mapaErroFormulario = FuncoesService.verificarErroForm(this.canalResgateForm);
      this.listaErroFormulario = new Set();
      this.mapaErroFormulario.forEach((v) => {
        this.listaErroFormulario.add(v)
      })
    });
  }


  private _inicializarFormulario(canal?: CanalResgate): void {
    let desabilitar: boolean = true;

    if (this.acaoFormulario == ConstantesService.INCLUIR || this.acaoFormulario == ConstantesService.EDITAR) {
      desabilitar = false;
    }

    if (canal) {
      this.canalResgateForm = new FormGroup(
        {
          nome: new FormControl({ value: canal.nome, disabled: true }, [Validators.required, Validators.minLength(5)]),
          situacao: new FormControl({ value: canal.situacao, disabled: desabilitar }, Validators.required),
          descricao: new FormControl({ value: canal.descricao, disabled: desabilitar }),
          usuarioServico: new FormControl({ value: canal.usuarioServico, disabled: desabilitar }, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
          clienteApi: new FormControl({ value: canal.clienteApi, disabled: desabilitar })
        }
      );
    } else {
      this.canalResgateForm = new FormGroup(
        {
          nome: new FormControl({ value: '', disabled: desabilitar }, [Validators.required, Validators.minLength(5)]),
          situacao: new FormControl({ value: '0', disabled: desabilitar }, Validators.required),
          descricao: new FormControl({ value: '', disabled: desabilitar }),
          usuarioServico: new FormControl({ value: '', disabled: desabilitar }, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
          clienteApi: new FormControl({ value: '', disabled: desabilitar })
        }
      );
    }
    this.onFormChanges();
  }

  onSubmit() {
    if (this.acaoFormulario == ConstantesService.INCLUIR) {
      if (window.confirm('Confirma inclusão do registro?')) {
        //put your delete method logic here
      }
    } else if (this.acaoFormulario == ConstantesService.EDITAR) {
      if (window.confirm('Confirma alteração do registro?')) {
        //put your delete method logic here
      }
    }
  }

  onCancelar() {
    this._inicializarFormulario(this.canalPesquisa);
    this._location.back();
  }

}
