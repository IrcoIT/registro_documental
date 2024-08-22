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






}
