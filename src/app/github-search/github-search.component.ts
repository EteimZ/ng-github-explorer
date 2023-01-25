import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent {

  searchForm = this.formBuilder.group({search : '' });

  constructor(private formBuilder: FormBuilder, private router : Router){}

  navigateToProfile(){
    this.router.navigate(['profile', this.searchForm.value.search])
  }

}
