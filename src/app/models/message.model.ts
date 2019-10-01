import { IMessage } from './message.interface'
import { IUser } from './user.interface'

export class Message implements IMessage {
    private user : IUser;
    private timestamp : Date;
    private text: string;

    constructor(user: IUser, timestamp: Date, text: string) {
        this.user = user;
        this.timestamp = timestamp;
        this.text = text;
    }

    getUser() : IUser {
        return this.user;
    }

    getTimestamp() : Date {
        return this.timestamp;
    }

    getText() : string {
        return this.text;
    }
}