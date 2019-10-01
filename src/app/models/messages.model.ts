import { IMessages } from './messages.interface';
import { IMessage } from './message.interface';

export class Messages implements IMessages {
    private messages: IMessage[];

    constructor() {
        this.messages = [];
    }

    getMessages() : IMessage[] {
        return this.messages;
    }

    addMessage(message: IMessage) : void {
        this.messages.push(message);
    }

}