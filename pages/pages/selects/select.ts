import {Component} from '@angular/core';

@Component({
    templateUrl:'select.html'
})
export class SelectPage{
    gaming: string = "n64";
    gender: string = "f";
    os: string;
    music: string;
    month: string;
    year: number;

    musicAlertOpts: {title: string, subTitle: string};

    constructor(){
        this.musicAlertOpts={
            title: '1995 Music',
            subTitle: 'Select your favourite'
        };
    }
    stpSelect(){
        console.log("STP selected");
    }
}