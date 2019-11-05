import { last } from 'rxjs/operators';
import { HabboSettings } from './habboSettings.model';

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
    settings : HabboSettings;

    constructor(set : any)
    {
        this.id = set.id;
        this.username = set.username;
        this.email = set.mail;
        this.motto = set.motto;
        this.look = set.look;
        this.account_created = new Date(set.account_created * 1000).toLocaleString('es-ES', {day: 'numeric', month: 'long', year: 'numeric'});
        this.rank = set.rank;
        this.auth_ticket = set.auth_ticket;
        this.last_online = set.last_online;
        this.last_login = set.last_login;
        this.settings = new HabboSettings(set.settings);
    }

    updateLocalStorage() {
        localStorage.setItem("currentUser", JSON.stringify(this));
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