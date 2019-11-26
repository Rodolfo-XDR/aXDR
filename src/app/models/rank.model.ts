import { Habbo } from './habbo.model';

export class Rank
{
    id : number;
    name: string;
    users? : Array<any>;
    badge? : string;

    constructor(id, name, badge, users = null)
    {
        this.id = id;
        this.name = name;
        this.badge = badge;
        this.users = users;
    }
}