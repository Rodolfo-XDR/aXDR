import { last } from 'rxjs/operators';

export class Habbo
{
    id : number;
    username: string;
    email: string;
    motto: string;
    look: string;
    account_created : string;
    rank: number;
    auth_ticket : string;
    web_bg : string;
    last_online : number;
    last_login : number;

    constructor(id = 0, username = '', email = '', motto = '', look = '', account_created = 0, rank = 1, auth_ticket = '', last_online = 0, last_login = 0)
    {
        this.id = id;
        this.username = username;
        this.email = email;
        this.motto = motto;
        this.look = look;
        this.account_created = new Date(account_created * 1000).toLocaleString('es-ES', {day: 'numeric', month: 'long', year: 'numeric'});
        this.rank = rank;
        this.auth_ticket = auth_ticket;
        this.web_bg = '';
        this.last_online = last_online;
        this.last_login = last_login;
    }

    ParseUnixTime(value : number) : string {

        let s = "--";

        let t = Math.floor(Date.now() / 1000) - value;

        if(t == 0)
            s = "Ahora mismo";
        else if(t < 0)
        {
            t *= -1;
            s = "Dentro de"
        }
        else
            s = "Hace"

        if(t < 60)
            s = s + " " + (t < 15) ? "unos segundos" : t + " segundos";
        else if (t <= 3600)
        {
            t = Math.round(t / 60)
            s = s + " " + t + " minuto" + ((t > 1) ? 's' : '');
        }
        else if (t <= 86400)
        {
            t = Math.round(t / 3600)
            s = s + " " + t + " hora" + ((t > 1) ? 's' : '');
        }
        else if (t <= 2629800)
        {
            //TODO Dias
        }
        else if (t <= 31557600)
        {
            //TODO Meses
        }
        else
        {
            //TODO Años
        }

        return s;
    }
}