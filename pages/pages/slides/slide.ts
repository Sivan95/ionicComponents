import {Component} from '@angular/core';

@Component({
    templateUrl:"slide.html"
})
export class SildePage{
    slides=[
        {
            title: "Welcome to the Doc!",
            description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",

        },
        {
            title: "What is Ionic?",
            description: "<b>Ionic Framework</b> is an open source SDK that enable developers to build high quality mobile app with web technology like HTML,CSS, and JavaScript.",

        },
        {
            title: "What is Ionic Cloud?",
            description:"The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notification, native builds, user auth, and live updating.",

        }
    ];
}