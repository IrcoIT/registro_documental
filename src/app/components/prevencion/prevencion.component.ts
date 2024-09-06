import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { documento } from '../../models/instruccionDTO';
import  data from '../../../assets/documentos.json';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LlamadasService } from '../../services/llamadas.service';

@Component({
  selector: 'app-prevencion',
  standalone: true,

  imports: [CommonModule, RouterLink],
  templateUrl: './prevencion.component.html',
  styleUrl: './prevencion.component.css'
})
export class PrevencionComponent {


  
  manuales: any[]=data.documentos[4].items;    
  clave:string
  data:documento[]


  constructor(private http: HttpClient, private filesService:LlamadasService) { }

  ngOnInit():void {    

    try {
      this.clave = localStorage.getItem("clave")
      console.log(this.manuales)
      
     } catch (error) {
       console.log(error.message)
     }
                
}

  //funcion para subir los ficheros firmados


  onLoad(event: Event): void {

    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.filesService.uploadFile(file)
        .subscribe(res => {
          console.log("se lee el fichero", res);
        });
    }
  }


}
