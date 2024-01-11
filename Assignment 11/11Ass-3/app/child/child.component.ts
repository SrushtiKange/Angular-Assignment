import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NumberService} from '../number.service';
import {StringService} from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers: [NumberService,StringService]
})
export class ChildComponent 
{
  result: string;
  result1: number;

  constructor(private numberService: NumberService,private stringService: StringService) 
  {
    const numberToCheck = 11;
    this.result = this.numberService.ChkPrime(numberToCheck);

    const inputString = 'Marvellous INFOSYSTEMS';
    this.result1 = this.stringService.CountCapital(inputString);
  }


}
