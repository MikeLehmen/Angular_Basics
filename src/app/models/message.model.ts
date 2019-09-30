import { User } from './user.model';

export class Message {
    user : User;
    timestamp : Date;
    text: string;

    constructor(user: User, timestamp: Date, text: string) {
        this.user = user;
        this.timestamp = timestamp;
        this.text = text;
    }
}