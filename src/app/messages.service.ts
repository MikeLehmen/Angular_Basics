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

    let newMessage = new Message(new User("Ralph"), new Date("June 17, 1974 04:12:43"), "Testing, testing....1, 2...");
    out.addMessage(newMessage);

    newMessage = new Message(new User("Ashley"), new Date("March 15, 1802 14:47:21"), "Hello world!");
    out.addMessage(newMessage);

    newMessage = new Message(new User("George"), new Date("November 2, 1992 18:13:58"), "Man, I'm beat.");
    out.addMessage(newMessage);

    newMessage = new Message(new User("Stacey"), new Date("January 29, 2003 22:43:03"), "What a long, strange trip it's been.");
    out.addMessage(newMessage);

    newMessage = new Message(new User("Homer"), new Date("October 31, 2018 17:15:37"), "All work and no play makes Homer go something something...");
    out.addMessage(newMessage);

    return out;
  }
}
