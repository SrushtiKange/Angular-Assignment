

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform 
{
  transform(value:number,...args:string[]): string
  {
    if(args[0]==="Prime")
    {
      let i:number=0;
      for(i=2;i<value;i++)
      {
        if(value%i==0)
        {
          return "It is not prime number";
        }
      }
      return "It is prime number";
    }
    
     if(args[0]==="Perfect")
    {
      let i:number=0;
      let sum:number=0;
      for(i=1;i<value;i++)
      {
        if(value%i==0)
        {
          sum=sum+i;
        }
      }
      if(sum==value)
      {
        return "It is perfect number";
      }
      else
      {
        return "It is not perfect number";
      }

    }
   if(args[0]==="Even")
    {
      if(value%2==0)
      {
        return "It is even number";
      }
      return "It is not even number";

    }
     if(args[0]==="Odd")
    {
      if(value%2!=0)
      {
        return "It is odd number";
      }
      return "It is not odd number";
    }
    return "Invalid input";
  }
  
}



