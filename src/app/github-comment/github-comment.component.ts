import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-github-comment',
  templateUrl: './github-comment.component.html',
  styleUrls: ['./github-comment.component.css']
})
export class GithubCommentComponent implements OnInit{

  @Input() username: string
  comments : Array<string>


  commentForm = this.formBuilder.group({comment : '' });

  constructor(private commentService: CommentService, 
              private formBuilder: FormBuilder,){}

  ngOnInit(){
    this.comments = this.commentService.getComment(this.username)
  }

  onSubmit(){
    this.commentService.addComment(this.username, this.commentForm.value.comment || "");
    this.comments = this.commentService.getComment(this.username);
    this.commentForm.reset()
  }
}
