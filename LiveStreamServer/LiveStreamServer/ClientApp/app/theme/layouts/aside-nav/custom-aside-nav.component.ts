import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';

declare let mLayout: any;
@Component({
    selector: "custom-app-aside-nav",
    templateUrl: "./custom-aside-nav.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class CustomAsideNavComponent implements OnInit, AfterViewInit {


    constructor() {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {

        mLayout.initAside();

    }

}