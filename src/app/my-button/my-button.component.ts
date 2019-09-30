import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {
  myService: MyServiceService;
  isLiked: boolean;

  constructor() { 
    // Create injector
    const injector : any = ReflectiveInjector.resolveAndCreate([MyServiceService]);
    // Get and save the service handle
    this.myService = injector.get(MyServiceService);

    this.isLiked = false;
  }

  ngOnInit() {
  }

  clickTest(): void {
    // this.isLiked = this.servicePlaceholder(this.isLiked);
    this.isLiked = this.myService.likeImage(this.isLiked);
    console.log("isLiked = " + this.isLiked);
  }

  // This will be done in the service
/*   servicePlaceholder(flagIn : boolean): boolean {
    return !flagIn;
  } */

}
