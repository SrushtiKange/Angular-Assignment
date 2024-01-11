import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  ChkPrime(num: number): string
   {
    if (num <= 1) {
      return "Number is not prime";
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return "Number is not prime";
      }
    }
    return "The number is prime";
  }
}
