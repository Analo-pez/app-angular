import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'formComponent',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    ngOnInit() { }

    searchResult(repo: string) {
        console.log(repo)
    }

    showForm = true;

    getIssuesGithub = () => {
        console.log('han clickado')
        // const name = document.querySelector(".js-name");
        // const repo = document.querySelector(".js-repo");
        // const username = name.value;
        // const reponame = repo.value;

        // fetch(`https://api.github.com/repos/${username}/${reponame}/issues`)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //         data.map(issues => {
        //             const results2 = document.querySelector('.js-result2');
        //             return results2.innerHTML += `<ul>
        //             <li> Title: ${issues.title} </li>
        //             <li> State: ${issues.state}  </li>
        //             <li> Create at: ${issues.created_at}</li></ul>`
        //         })
        //     });
    }

}
