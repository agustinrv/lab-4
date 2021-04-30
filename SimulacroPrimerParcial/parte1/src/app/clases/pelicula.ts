  
export class Pelicula {
    id:number;
    nombre:string;
    tipo:string;
    fechaDeEstreno:string;
    cantidadDePublico:number;
    FotoDeLaPelicula:string;


    public constructor(id:number, nombre:string,tipo:string, fechaDeEstreno:string, cantidadDePublico:number,  FotoDeLaPelicula:string)
    {
        this.id=id;
        this.nombre=nombre;
        this.tipo=tipo;
        this.fechaDeEstreno= fechaDeEstreno;
        this.cantidadDePublico = cantidadDePublico;
        this.FotoDeLaPelicula = FotoDeLaPelicula;

    }
}