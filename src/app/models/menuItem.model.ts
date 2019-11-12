export class menuItem 
{
    //TODO Create Accesors pls;
    public id: string;
    public title: string;
    public path: string;
    public children: menuItem[];
    public order: number;

    constructor(title : string, path : string, children : menuItem[], id : string = '') {
        this.title = title;
        this.path = path;
        this.children = children;
        this.id = id;
    }
}