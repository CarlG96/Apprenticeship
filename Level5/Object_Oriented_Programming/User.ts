export class User {
    private _firstName: string;
    private _surname: string;

    toString(): string {
        return `${this.firstName} ${this.surname}`;
    }

    constructor(firstName: string, surname: string) {
        this._firstName = firstName;
        this._surname = surname;
    }

    get firstName(): string {
        return this._firstName;
    }

    get surname(): string {
        return this._surname;
    }

    set firstName(firstName: string) {
        this._firstName = firstName;
    }

    set surname(surname: string) {
        this._surname = surname;
    }

}