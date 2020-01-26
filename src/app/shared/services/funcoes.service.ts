import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { ErroFormulario } from '../interfaces/erro-formulario';

@Injectable({
  providedIn: 'root'
})
export class FuncoesService {

  constructor() { }

  public static verificarErroForm(form: FormGroup): Map<string, string> {

    const result: Map<string, string> = new Map();

    for (let campo in form.controls) {
      let controlErrors: ValidationErrors;
      if (form.get(campo).touched || form.get(campo).dirty) {
        controlErrors = form.get(campo).errors;
      }
      if (controlErrors) {
        Object.keys(controlErrors).forEach(keyError => {
          if (keyError.toLowerCase() == 'required') {
            result.set(campo, 'Campo obrigatório não informado.')
          } else if (keyError.toLowerCase() == 'minlength') {
            result.set(campo, 'Campo deve ter no mínimo ' + controlErrors['minlength'].requiredLength + ' caracteres')
          } else if (keyError.toLowerCase() == 'maxlength') {
            result.set(campo, 'Campo deve ter no máximo ' + controlErrors['maxlength'].requiredLength + ' caracteres')
          } else {
            result.set(campo, keyError)
          }
        });
      }
    }
    return result;
  }
}
