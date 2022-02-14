import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenStr',
})
export class ShortenStrPipe implements PipeTransform {
  transform(value: any): any {
    if (value.length > 10) {
      return value.substr(12, 19) + '...';
    }
    return value;
  }
}
