import {Pipe, PipeTransform} from '@angular/core';
import { Topic } from './topic';
@Pipe({
    name: 'columnFilter'
})
export class ColumnFilterPipe implements PipeTransform {
    transform(items: Topic [], columnName: string): any {        
      return items.filter(t => t[columnName]);
    }
}
    