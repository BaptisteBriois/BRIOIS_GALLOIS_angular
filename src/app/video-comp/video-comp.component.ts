import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'bbmg-video-comp',
    templateUrl: './video-comp.component.html',
    styleUrls: ['./video-comp.component.css']
})
export class VideoCompComponent implements OnInit {

    video : string = "fail.mp4";

  constructor() { }

  ngOnInit() {
  }

}
