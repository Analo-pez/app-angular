import { Component } from '@angular/core';


@Component({
    selector: 'headerComponent',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    title = 'App-Angular';
}