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
  inputText: string = '';
  textLength: number = 0;

  onInputChange(event: Event): void 
  {
    this.inputText = (event.target as HTMLInputElement).value;
    this.textLength = this.inputText.length;
  }
 
}
