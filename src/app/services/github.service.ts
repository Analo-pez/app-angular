import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';

@Injectable({
    providedIn: 'root'
})
export class GithubService {

    constructor(private http: HttpClient) { }


    getQuery(query: string) {
        const url = `https://api.github.com/repos/${query}`;

        return this.http.get<any>(url);
    }

    getIssues(username: string, reponame: string): Observable<any> {
        return this.getQuery(`${username}/${reponame}/issues?page=1&per_page=100`)
            .pipe(catchError(this.handleError))
    }
    handleError(error: any) {
        return throwError(error.message);
    }


}