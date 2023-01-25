import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {
  @Input() username : string
  repos: any
  
  constructor(private githubService: GithubService ){}

  ngOnInit(){
    this.githubService.getRepos(this.username).subscribe((data) => this.repos = data )
  }
}
