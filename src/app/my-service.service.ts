import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  likeImage(flag : boolean): boolean {
    console.log("Calling service to change liked flag...");
    return !flag;
  }
}
