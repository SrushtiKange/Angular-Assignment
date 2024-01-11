import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArithmeticService} from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers: [ArithmeticService]
})
export class DemoComponent 
{
  addition:number;
  subtraction:number;
  constructor(private obj:ArithmeticService)
  {
    this.addition=this.obj.Add(10,5);
    this.subtraction=this.obj.Sub(10,5);
  }
 

}
