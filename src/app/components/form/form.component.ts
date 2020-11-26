import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
    selector: 'formComponent',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent {

    constructor(private spinner: NgxSpinnerService) { }

    showSpinner() {
        this.spinner.show();
        setTimeout(() => {
            this.spinner.hide();
        }, 500);
    }

    showForm = true;
    showPagination = false;

    issues: any[] = [];

    pageActual = 1;


    getIssuesGithub(item1: HTMLInputElement, item2: HTMLInputElement) {
        this.showForm = false;
        this.showPagination = true;
        this.showSpinner();


        fetch(`https://api.github.com/repos/${item1.value}/${item2.value}/issues`)
            .then(response => response.json())
            .then(data => {
                if (data.message === "Not Found") {
                    return alert("Los datos introducidos son incorrectos. ¡¡Refresca la página!!")
                }
                else if (data == "") {
                    alert("No hay issues en este repositorio. ¡¡Refresca la página!!")
                } else {
                    this.issues = data;
                }
            })
    }
}
