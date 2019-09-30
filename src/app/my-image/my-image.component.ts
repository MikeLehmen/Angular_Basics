import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.css']
})
export class MyImageComponent implements OnInit {
  imagePath : string;

  constructor() { 
    this.imagePath = "/assets/homer_fade.gif";
  }

  ngOnInit() {
  }

}
