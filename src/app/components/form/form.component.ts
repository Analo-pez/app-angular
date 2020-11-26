import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { GithubService } from '../../services/github.service';


@Component({
    selector: 'formComponent',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent {

    constructor(private spinner: NgxSpinnerService,
        private github: GithubService,
    ) { }

    showSpinner() {
        this.spinner.show();
        setTimeout(() => {
            this.spinner.hide();
        }, 1000);
    }

    showForm = true;
    showPagination = false;

    issues: any[] = [];

    pageActual = 1;

    search(username: string) {
        this.github.getIssues(username)
            .subscribe((data: any) => {
                this.issues = data;
                console.log(data)
            })
    }


    // getIssuesGithub(item1: HTMLInputElement, item2: HTMLInputElement) {
    //     this.showForm = false;
    //     this.showPagination = true;
    //     this.showSpinner();


    // fetch(`https://api.github.com/repos/${item1.value}/${item2.value}/issues`)
    //     .then(response => response.json())
    //     .then(data => {
    //         if (data.message === "Not Found") {
    //             return alert("Los datos introducidos son incorrectos. ¡¡Refresca la página!!")
    //         }
    //         else if (data == "") {
    //             alert("No hay issues en este repositorio. ¡¡Refresca la página!!")
    //         } else {
    //             this.issues = data;
    //         }
    //     })
    // }
}
