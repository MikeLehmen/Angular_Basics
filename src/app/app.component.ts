import { Component, ReflectiveInjector } from '@angular/core';
import { MessagesService } from './messages.service';
import { Messages } from './models/messages.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages : Messages;

  constructor(messagesService : MessagesService) {
    //const injector : any = ReflectiveInjector.resolveAndCreate([MessagesService]);

    //let messageService = injector.get(MessagesService);

    //this.messages = messageService.initMessages();

    this.messages = messagesService.initMessages();

    // Debug
    this.messages.messages.forEach( function(m) { console.log(m.user.name + ": " + m.text + "   @ " + m.timestamp); });
  }
  
}
