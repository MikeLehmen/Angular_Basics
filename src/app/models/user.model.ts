import { IUser } from './user.interface'

export class User implements IUser {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
}