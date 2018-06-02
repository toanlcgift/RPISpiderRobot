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
        var socket = new WebSocket("ws://" + self.location.host + "/ws");
        socket.onopen = function (event) {
            socket.send("live");
        };
        socket.onmessage = function (event) {
            if (event.data == "done") {
                document.getElementById("videoplayer").children[0].setAttribute("src", "video.mp4");
            }
            console.log(event);
        }
    }
}