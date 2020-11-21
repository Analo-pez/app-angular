import { Component } from '@angular/core';


@Component({
    selector: 'formComponent',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent {

    showForm = true;

    getIssuesGithub = () => {
        const name = document.querySelector(".js-name");
        const repo = document.querySelector(".js-repo");
        const results2 = document.querySelector('.js-result2');
        const username = name.value;
        const reponame = repo.value;

        fetch(`https://api.github.com/repos/${username}/${reponame}/issues`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data == "") {
                    return results2.innerHTML += `<div class="card"><p> No hay issues en este repositorio</p></div>`

                } else {
                    data.map(issues => {
                        return results2.innerHTML += `
                        <div class="card" style="width: 18rem;">
                        <img src=${issues.user.avatar_url}  class="card-img-top" alt="Author-image">
                        <div class="card-body">
                          <h5 class="card-title">Title: ${issues.title}</h5>
                          <p class="card-text">Author: ${issues.user.login}</p>
                          <p class="card-text">State: ${issues.state}</p>
                          <p class="card-text">Description: ${issues.body}</p>
                          <p class="card-text">Created at: ${issues.created_at}</p>
                          <a class="btn btn-primary" href=${issues.html_url} target="_blank">Link to issue </a>
                        </div>
                      </div>`
                    })
                }
            });
    }

}
