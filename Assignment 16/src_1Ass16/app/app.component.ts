import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title= 'angular testing';
  public default: string = "Hello WorlD";
  public capitalCount: number = this.countCapital(this.default);
  
  countCapital(str: string): number 
  {
    
    return (str.match(/[A-Z]/g) || []).length;
  }

  numbersArray: number[] = [1, 8, 3, 2, 5];

  arrayAddition(numbers: number[]): number
   {
    return numbers.reduce((sum, num) => sum + num, 0);
  }

  password: string = '';
  resultMessage: string = '';

  checkPassword() {
    const capitalCount = (this.password.match(/[A-Z]/g) || []).length;
    const smallCount = (this.password.match(/[a-z]/g) || []).length;
    const digitCount = (this.password.match(/\d/g) || []).length;
    const specialCount = (this.password.match(/[!@#$%^&*(),.?":{}|<>]/g) || []).length;

    if (
      capitalCount >= 2 &&
      smallCount >= 3 &&
      digitCount >= 2 &&
      specialCount >= 1
    ) {
      this.resultMessage = 'Password is strong!';
    } else {
      this.resultMessage = 'Password does not meet the criteria.';
    }
  }
}
