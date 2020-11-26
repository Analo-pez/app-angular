import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GithubService {

    constructor(private http: HttpClient) { }


    getQuery(query: string) {
        const url = `https://api.github.com/repos/${query}`;

        return this.http.get(url);
    }

    getIssues(username: string, reponame: string) {
        return this.getQuery(`${username}/${reponame}/issues?page=5&per_page=100`)
            .pipe(map(data => data))
    }

}