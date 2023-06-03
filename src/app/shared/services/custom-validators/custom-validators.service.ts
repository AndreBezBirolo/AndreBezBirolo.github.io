import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, } from '@angular/forms';
import { UtilsService } from '../../utils/utils.service';

@Injectable()
export class CustomValidatorsService {
  private static hasNumbersRegex = /\d/;

  constructor() {
  }

  /*
   Alert if has char in input
   */
  static noChars(control: AbstractControl): ValidationErrors | null {
    if (control.value) {
      if (!CustomValidatorsService.hasNumbersRegex.test(control.value)) {
        return { noChars: 'Não são permitidos caracteres.' };
      }
    }

    return null;
  }

  /**
   * Verifica se é um e-mail válido
   */
  public static email(errorMessage?: string): ValidatorFn {
    return ((control: FormControl): ValidationErrors | null => {
      if (control.value && !UtilsService.isValidEmail(control.value)) {
        return {
          invalidEmail: errorMessage ? errorMessage : 'E-mail inválido',
        };
      }

      return null;
    }) as ValidatorFn;
  }

  /**
   * Verifica se é um número de telefone fixo/celular válido
   */
  public static phone(errorMessage?: string): ValidatorFn {
    return ((control: FormControl): ValidationErrors | null => {
      if (control.value && !UtilsService.isPhoneValid(control.value)) {
        return {
          invalidPhone: errorMessage
            ? errorMessage
            : 'Número de telefone inválido',
        };
      }

      return null;
    }) as ValidatorFn;
  }
}
