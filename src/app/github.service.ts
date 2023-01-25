import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient, private router : Router) { }

  getUsers(): Observable<any>{
    return this.http.get<any>("https://api.github.com/users")
  }

  getUser(username: string): Observable<any>{
    return this.http.get<any>(`https://api.github.com/users/${username}`).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404){
          this.router.navigate(['/404']);
        } else{
          console.error(`An error occured ${error.error}`);
        }
        return throwError(error)
      })
    );
  }

  getRepos(username: string): Observable<any>{
    return this.http.get<any>(`https://api.github.com/users/${username}/repos`)
  }
}
