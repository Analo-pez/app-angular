import { Component, OnInit } from '@angular/core';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'resultComponent',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})
export class ResultComponent {
    title = "issues.title";
    state = "issues.state";
    date = "issue create at: issues.created_at";
    imgUrl = "issues.user.avatar_url";
    link = "issues.html_url"

}

// export class ResultComponent implements OnInit {

//     constructor(private modalService: NgbModal) { }

//     ngOnInit() { }

// }
