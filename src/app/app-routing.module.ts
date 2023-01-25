import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubUsersListComponent } from './github-users-list/github-users-list.component';
import { GithubUserProfileComponent } from './github-user-profile/github-user-profile.component';

const routes: Routes = [{path: '', component: GithubUsersListComponent}, {path:'profile/:userId', component: GithubUserProfileComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
