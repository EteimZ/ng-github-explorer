import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-github-user-profile',
  templateUrl: './github-user-profile.component.html',
  styleUrls: ['./github-user-profile.component.css']
})
export class GithubUserProfileComponent implements OnInit{
  
  user: string
  
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const userIdFromRoute = this.route.snapshot.params['userId'];

    this.user = userIdFromRoute
  
  }

}
