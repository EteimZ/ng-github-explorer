import { Component, Input, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github-user-display',
  templateUrl: './github-user-display.component.html',
  styleUrls: ['./github-user-display.component.css']
})
export class GithubUserDisplayComponent implements OnInit {
  @Input() username : string

  user: any

  constructor(private githubService: GithubService){}

  ngOnInit(){
    this.githubService.getUser(this.username).subscribe((data) => this.user = data )
  }

  
}
