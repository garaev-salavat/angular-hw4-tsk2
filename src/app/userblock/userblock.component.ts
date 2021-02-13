import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-userblock',
  templateUrl: './userblock.component.html',
  styleUrls: ['./userblock.component.css']
})
export class UserblockComponent {

@Input() user;

}
