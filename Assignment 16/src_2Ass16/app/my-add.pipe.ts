import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd',
  standalone: true
})
export class MyAddPipe implements PipeTransform
 {

  transform(value: number,Param:string): number
   {
   return value+parseInt(Param);
  }

}
