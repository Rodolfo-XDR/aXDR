export class User
{
    id : number;
    username: string;
    email: string;
    motto: string;
    look: string;
    rank: number;
    auth_ticket : string;
    web_bg : string;

    constructor(id = 0, username = '', email = '', motto = '', look = '', rank = 1, auth_ticket = '')
    {
        this.id = id;
        this.username = username;
        this.email = email;
        this.motto = motto;
        this.look = look;
        this.rank = rank;
        this.auth_ticket = auth_ticket;
        this.web_bg = '';
    }
}