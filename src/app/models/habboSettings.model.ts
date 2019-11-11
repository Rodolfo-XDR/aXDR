export class HabboSettings
{
    id : number;
    web_background : string;
    web_header : string;

    constructor(set : any) {
        this.id = set.user_id;
        this.web_background = set.web_background;
        this.web_header = set.web_header;
    }

    updateBackground(value : any) {
        this.web_background = value;
    }

    updateHeader(value : any) {
        this.web_header = value;
    }
}