import { IMessage } from './message.interface'

export interface IMessages {
    getMessages() : IMessage[];
    addMessage(message: IMessage) : void;
}