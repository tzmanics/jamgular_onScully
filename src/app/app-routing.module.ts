import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }, { path: 'tutorials', loadChildren: () => import('./tutorials/tutorials.module').then(m => m.TutorialsModule) }, { path: 'message-boardd', loadChildren: () => import('./message-board/message-board.module').then(m => m.MessageBoardModule) }, { path: 'user', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
