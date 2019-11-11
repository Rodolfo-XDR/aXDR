import { Habbo } from './habbo.model';

export class Rank
{
    id : number;
    name: string;
    users? : any;

    constructor(id, name, users = null)
    {
        this.id = id;
        this.name = name;
        this.users = users;
    }
}