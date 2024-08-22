import { Component, OnInit } from '@angular/core';
import { LlamadasService } from '../../services/llamadas.service';
import { documento } from '../../models/instruccionDTO';




import  data from '../../../assets/documentos.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manuales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manuales.component.html',
  styleUrl: './manuales.component.css'
})
export class ManualesComponent implements OnInit{

  manuales: any[]=data.documentos[0].items;    
  
  data:documento[]
 

  //constructor(private manualService: LlamadasService) {}

  constructor(private http: LlamadasService) {}

  ngOnInit():void {    
    
   console.log(this.manuales)

   /* this.http
      .getFilesManuales()
      .subscribe((manual)=> {
        this.data=manual
        console.log("La respuesta es:",  JSON.stringify(this.data))

    })*/



    //console.log(data)
        
}
}
