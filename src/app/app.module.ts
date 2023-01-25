import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubUsersListComponent } from './github-users-list/github-users-list.component';
import { GithubUserProfileComponent } from './github-user-profile/github-user-profile.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { GithubListComponent } from './github-list/github-list.component';
import { GithubUserDisplayComponent } from './github-user-display/github-user-display.component';
import { GithubReposComponent } from './github-repos/github-repos.component';
import { GithubCommentComponent } from './github-comment/github-comment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from "@angular/material/card"
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    GithubUsersListComponent,
    GithubUserProfileComponent,
    GithubSearchComponent,
    GithubListComponent,
    GithubUserDisplayComponent,
    GithubReposComponent,
    GithubCommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
