import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {
  isLiked: boolean;

  constructor() { 
    this.isLiked = false;
  }

  ngOnInit() {
  }

  clickTest(): void {
    this.isLiked = this.servicePlaceholder(this.isLiked);
    console.log("isLiked = " + this.isLiked);
  }

  // This will be done in the service
  servicePlaceholder(flagIn : boolean): boolean {
    return !flagIn;
  }

}
