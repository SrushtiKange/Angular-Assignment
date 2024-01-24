import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {ReactiveFormsModule} from '@angular/forms';
// import classes which are required for reactive forms
import {FormBuilder,Validators} from '@angular/forms'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ButtonsModule,AlertModule,BsDropdownModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers : [FormBuilder,Validators]
})

export class AppComponent 
{
// Inject FormBuilder service
constructor(public fbobj : FormBuilder)
{
}

MarvellousForm = this.fbobj.group(
  {
    // Add Multiple validations
    username :['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)] ],
   email :['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
   number :['', [Validators.required,Validators.pattern(/^\d{0,10}$/)]],
   city :['', [Validators.required,Validators.minLength(4)]],
   state :['', [Validators.required]],
   zip :['', [Validators.required, Validators.pattern(/^\d{5,5}$/)]],
   comment :['', [Validators.required,  Validators.minLength(30)]],
   
   
    
  }
);



}
