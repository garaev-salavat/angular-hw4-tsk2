import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserblockComponent } from './userblock.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [UserblockComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [UserblockComponent]
})
export class UserblockModule { }
