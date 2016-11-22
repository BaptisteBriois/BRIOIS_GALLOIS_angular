import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'bbmg-video-comp',
    templateUrl: './video-comp.component.html',
    styleUrls: ['./video-comp.component.css']
})
export class VideoCompComponent implements OnInit {

    private player;
    private ytEvent;
    private id : string = "DZAqKdiCqR8";

    onStateChange(event) {
        this.ytEvent = event.data;
    }
    savePlayer(player) {
        this.player = player;
    }
  constructor() { }

  ngOnInit() {
  }

}
