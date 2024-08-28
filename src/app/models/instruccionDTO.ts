export interface items {
    
    id:String;
    nombre: String;
    seccion:String;
    alias:String;
    fecha:String;
    url:string;
    nombreFichero:String;

}

export interface documento {

    nombre:string;
    item: items[];
}

export class UserDto {

    name:string
    password:string

    constructor (name:string, password:string){
        this.name=''
        this.password=password
    }
}

   
    
