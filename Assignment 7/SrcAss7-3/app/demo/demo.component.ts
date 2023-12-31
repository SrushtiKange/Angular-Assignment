import { Component, Output} from '@angular/core';
import{EventEmitter} from '@angular/core';


@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  @Output() public msg= new EventEmitter();
  public Message: string="Marvellous Infosystems";


  public fun()
  {
   
        this.msg.emit("Educating for better tomorrow");
   
  }
}