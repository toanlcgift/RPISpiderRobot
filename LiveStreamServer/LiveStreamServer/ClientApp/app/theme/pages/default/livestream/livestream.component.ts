import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: '.m-wrapper',
    templateUrl: './livestream.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class LiveStreamComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        var socket = new WebSocket("ws://localhost:5000/ws");
        socket.onopen = function (event) {
            socket.send("live");
        };
        socket.onmessage = function (event) {
            console.log(event);
        }
    }
}