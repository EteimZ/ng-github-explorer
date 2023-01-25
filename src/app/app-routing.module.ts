import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubUsersListComponent } from './github-users-list/github-users-list.component';
import { GithubNotFoundComponent } from './github-not-found/github-not-found.component';
import { GithubUserProfileComponent } from './github-user-profile/github-user-profile.component';

const routes: Routes = [
  { path: '', component: GithubUsersListComponent },
  { path: 'profile/:userId', component: GithubUserProfileComponent },
  { path: '404', component: GithubNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
