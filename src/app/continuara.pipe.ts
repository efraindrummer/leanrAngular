import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'continuara'
})
export class ContinuaraPipe implements PipeTransform {

  transform(valor: string): string {
    if (valor.toString().length > 140) {
      valor = valor.substr(0,140);
    }
    valor += ' Continuara...';
    return valor;
  }

}
