export class Pelicula 
{
    public id:number;
    public nombre:string;
    public tipo:Array<string>=["terror", "comedia" , "amor", "otros"];
    public fechaDeEstreno:Date;
    public cantidadDePublico:number;
    public fotoPelicula:any;
}
