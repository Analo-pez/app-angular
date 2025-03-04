import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';


@Component({
    selector: 'formComponent',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent {

    loading: boolean = false;
    showForm = true;
    showPage = false;

    p: number = 1;

    issues: any[] = [];


    constructor(private github: GithubService) {

    }

    search(username: string, reponame: string) {
        this.showForm = false;
        this.loading = true;
        this.github.getIssues(username, reponame)
            .subscribe((data: any) => {
                this.issues = data;
                this.loading = false;
                this.showPage = true;
            }, (error) => {
                this.loading = false;
                alert(`Ha habido un error:  ${error}. \n \n ¡Refresca la página!`)
            })
    }


}
