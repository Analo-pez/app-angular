import { Component } from '@angular/core';
// import { NgxSpinnerService } from 'ngx-spinner';
import { GithubService } from '../../services/github.service';


@Component({
    selector: 'formComponent',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent {

    constructor(
        private github: GithubService,
    ) { }

    // private spinner: NgxSpinnerService,

    // showSpinner() {
    //     this.spinner.show();
    //     setTimeout(() => {
    //         this.spinner.hide();
    //     }, 1000);
    // }

    showForm = true;
    // showPagination = false;

    // pageActual = 1;

    issues: any[] = [];

    search(username: string, reponame: string) {
        this.github.getIssues(username, reponame)
            .subscribe((data: any) => {
                this.issues = data;
                console.log(data)
            })
    }

}
