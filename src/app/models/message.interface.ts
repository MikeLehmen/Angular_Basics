import { IUser } from './user.interface';

export interface IMessage {
    getUser(): IUser;
    getTimestamp(): Date;
    getText(): string;
}