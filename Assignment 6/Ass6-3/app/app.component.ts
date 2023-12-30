import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<h1>Marvellous Infosystems</h1>
  Enter your name:<input type="text">
  <router-outlet></router-outlet>`,
  styles: `h1
  {
      color:blue;
  }`
})
export class AppComponent {
  title = '3Assignment6';
}
