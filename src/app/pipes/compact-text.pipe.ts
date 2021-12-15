import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compactText'
})
export class CompactTextPipe implements PipeTransform {
  transform(textParam: string, maxLength: number = 500): string {
    return textParam.length > (maxLength - 3) ? textParam.slice(0, maxLength) + '...' : textParam;
  }
}
