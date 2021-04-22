export class Pelicula 
{
    public id:number;
    public nombre:string;
    public tipo:string;
    public fechaEstreno:string;
    public cantidadPublico:number;
    public pathFoto:string;


    public constructor(id:number, nombre:string,tipo:string, fechaEstreno:string, cantidadPublico:number,  pathFoto:string)
    {
        this.id=id;
        this.nombre=nombre;
        this.tipo=tipo;
        this.fechaEstreno= fechaEstreno;
        this.cantidadPublico = cantidadPublico;
        this.pathFoto = pathFoto;

    }

}
