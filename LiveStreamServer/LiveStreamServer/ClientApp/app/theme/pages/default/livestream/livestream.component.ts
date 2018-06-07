import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { window } from 'rxjs/operator/window';
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
        socket.binaryType = "arraybuffer";
        socket.onopen = function(event) {
            socket.send("live");
        };
        socket.onmessage = function(event) {
            var frame = new Uint8Array(event.data);
            var image = document.getElementById("mainimage");

            var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            var output = "";
            var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
            var i = 0;

            while (i < frame.length) {
                chr1 = frame[i++];
                chr2 = i < frame.length ? frame[i++] : Number.NaN; // Not sure if the index 
                chr3 = i < frame.length ? frame[i++] : Number.NaN; // checks are needed here

                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }
                output += keyStr.charAt(enc1) + keyStr.charAt(enc2) +
                    keyStr.charAt(enc3) + keyStr.charAt(enc4);
            }

            image.setAttribute('src', 'data:image/png;base64,' + output);
        }
    }
}