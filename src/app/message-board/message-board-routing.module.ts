import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageBoardComponent } from './message-board.component';

const routes: Routes = [{ path: '', component: MessageBoardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageBoardRoutingModule { }
