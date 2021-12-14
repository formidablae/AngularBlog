import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'formatDate'
})

export class FormatDatePipe implements PipeTransform {
    transform(dateParam: string, dateFormat: string = "DD/MM/YYYY HH:mm"): any {
        return moment(new Date(dateParam)).format(dateFormat);
    }
}
