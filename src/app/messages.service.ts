import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { Message } from './models/message.model';
import { Messages } from './models/messages.model';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  initMessages(): Messages {
    let out : Messages = new Messages;

    let newMessage = new Message(new User("Cthulu"), new Date("June 17, 1974 04:12:43"), "I'm still asleep...");
    out.addMessage(newMessage);

    newMessage = new Message(new User("Ralph"), new Date("March 15, 1802 14:47:21"), "I wonder what is going on out there.");
    out.addMessage(newMessage);

    newMessage = new Message(new User("George"), new Date("November 2, 1992 18:13:58"), "Man, I'm beat.");
    out.addMessage(newMessage);

    newMessage = new Message(new User("Ted"), new Date("January 29, 2003 22:43:03"), "Something something in Latin.");
    out.addMessage(newMessage);

    newMessage = new Message(new User("Homer"), new Date("October 31, 2018 17:15:37"), "All work and no play makes Homer go something something...");
    out.addMessage(newMessage);

    return out;
  }
}
