import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor() { }

  addComment(username: string, comment: string){
    if ( localStorage.getItem(username)){
      const comments : Array<string> = JSON.parse(localStorage.getItem(username) || '[]')
      comments.push(comment)
      localStorage.setItem(username, JSON.stringify(comments))
    } else {
      const comments: Array<string> = []
      comments.push(comment)
      localStorage.setItem(username, JSON.stringify(comments))
    }
  }

  getComment(username: string): Array<string>{
    const comments : Array<string> = JSON.parse(localStorage.getItem(username) || '[]')
    return comments    
  }





}
