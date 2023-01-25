import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';


@Component({
  selector: 'app-github-list',
  templateUrl: './github-list.component.html',
  styleUrls: ['./github-list.component.css']
})
export class GithubListComponent implements OnInit {

  users!: any; 

  constructor( private gitHubService: GithubService){}

  ngOnInit() {
    this.gitHubService.getUsers().subscribe((data) => this.users = data )
  }
  
}
