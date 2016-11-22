import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbmg-presentation-comp',
  templateUrl: './presentation-comp.component.html',
  styleUrls: ['./presentation-comp.component.css']
})
export class PresentationCompComponent implements OnInit {

  users = [
    {name:"Mehdi Gallois", photo:"t31.0-8/14258153_10208773026216502_848813232320945649_o.jpg"},
    {name:"Baptiste Briois", photo:"v/t1.0-9/988655_362573153871368_523722938_n.jpg?oh=2927c155e50fa7cf1821b6516ad25a3c&oe=58C73AB1"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
