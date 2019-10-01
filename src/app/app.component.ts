import { Component } from '@angular/core';
import { MessagesService } from './messages.service';
import { Messages } from './models/messages.model';
import { IMessages } from './models/messages.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages : IMessages;

  constructor(messagesService : MessagesService) {
    // Old way using concrete injector
    //const injector : any = ReflectiveInjector.resolveAndCreate([MessagesService]);
    //let messageService = injector.get(MessagesService);
    //this.messages = messageService.initMessages();

    this.messages = messagesService.initMessages();

    // Debug
    this.messages.getMessages().forEach( function(m) { 
      console.log(m.getUser().getName() + ": " + m.getText() + "   @ " + m.getTimestamp()); 
    });
  }
  
}
