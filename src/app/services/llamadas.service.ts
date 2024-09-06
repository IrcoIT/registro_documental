import { Injectable, NgModule } from '@angular/core';
import { documento} from '../models/instruccionDTO';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})


export class LlamadasService {

  rutaFicheros: string; 

  constructor(private http:HttpClient) { }


  getFilesManuales(): Observable<documento[]>{

    
    this.rutaFicheros = '../../assets/documentos.json'   

    //this.rutaFicheros="https://jsonplaceholder.typicode.com/posts"
    
    return this.http.get<documento[]>(this.rutaFicheros)

     

  }

  //llamada servicio para subir ficheros
  uploadFile(file: Blob): Observable<any> {
    
    const form = new FormData();
    form.append('file', file);
    return this.http.post(`https://github.com/IrcoIT/registro_documental/tree/main/src/assets`, form, {
      headers: {
        'Content-type': 'multipart/form-data'
      }
    });
  }








}
