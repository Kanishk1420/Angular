import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeWords',
})
export class CapitalizeWordsPipe implements PipeTransform {
  transform(value: string|null|undefined): string {
  if (!value) return '';
  return value.toLowerCase().replace(/(^|\s)\S/g, match => match.toUpperCase());
}
}
