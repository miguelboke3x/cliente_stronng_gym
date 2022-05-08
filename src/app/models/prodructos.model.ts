export class Productos{
    identificador:number;
    nombre:string;
    descripcion:string;
    pvp:number;
    sn:string;
    imagen:string;
    stock:number;
    rebajado:boolean;

    constructor(identificador:number, nombre:string, descripcion:string, pvp:number, sn:string, imagen:string, stock:number, rebajado:boolean ){
      this.identificador=identificador;
      this.nombre=nombre;
      this.descripcion=descripcion;
      this.pvp=pvp;
      this.sn=sn;
      this.imagen=imagen;
      this.stock=stock;
      this.rebajado=rebajado;

    }

}
