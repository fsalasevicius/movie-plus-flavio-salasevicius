import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultBusqueda = [];
    for (const element of value) {
      if ((element.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) || (element.genero.toLowerCase().indexOf(arg.toLowerCase()) > -1) ||(element.elenco.toLowerCase().indexOf(arg.toLowerCase()) > -1) ){
        resultBusqueda.push(element);
      };
    };
    return resultBusqueda;
  }

}
