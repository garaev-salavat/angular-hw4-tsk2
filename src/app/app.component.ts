import { Component } from '@angular/core';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-hw4-tsk2';

  users:User[] = [
    new User('ivan'), 
    new User('janet'), 
    new User('sheldon'),
    new User('den'), 
    new User('john'),
    new User('roman'),
    new User('natasha'),
    new User('sasha')
  ];

searchStr:string = '';

}
