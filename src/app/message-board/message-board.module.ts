import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageBoardRoutingModule } from './message-board-routing.module';
import { MessageBoardComponent } from './message-board.component';


@NgModule({
  declarations: [MessageBoardComponent],
  imports: [
    CommonModule,
    MessageBoardRoutingModule
  ]
})
export class MessageBoardModule { }
