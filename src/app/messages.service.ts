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

    return out;
  }
}
