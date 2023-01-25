import { Component } from '@angular/core';

@Component({
  selector: 'app-github-users-list',
  templateUrl: './github-users-list.component.html',
  styleUrls: ['./github-users-list.component.css']
})
export class GithubUsersListComponent {
  users = [{ name: "Eteims", profile:"Changing the world line by line"},
            { name: "Jacob", profile:"I stole my brothers throne."}] 
}
