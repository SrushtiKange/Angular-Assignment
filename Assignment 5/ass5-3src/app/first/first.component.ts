import { Component } from '@angular/core';
import { SecondComponent } from '../second/second.component';


@Component({
  selector: 'app-first',
  standalone: true,
  imports: [SecondComponent],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

}
