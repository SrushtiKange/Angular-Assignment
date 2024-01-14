import { Routes } from '@angular/router';
import {TechnologiesComponent} from './technologies/technologies.component';
import {BooksComponent} from './books/books.component';
import {InvalidpageComponent} from './invalidpage/invalidpage.component';

export const routes: Routes = [
    /*{ path: '', component: TechnologiesComponent },
    { path: 'books', component: BooksComponent },
   
    {path: '**', component: InvalidpageComponent}*/
    { path: 'technologies', component: TechnologiesComponent },
    { path: 'books', component: BooksComponent },
    { path: 'invalidpage', component: InvalidpageComponent},
    { path: '', redirectTo: '/technologies', pathMatch: 'full' }, // Default route
    { path: '**', redirectTo: '/invalidpage' } 
   
];
