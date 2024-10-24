import { Component, OnInit } from '@angular/core';
import { LlamadasService } from '../../services/llamadas.service';
import { documento } from '../../models/instruccionDTO';




import  data from '../../../assets/documentos.json';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from "../buttons/buttons.component";

@Component({
  selector: 'app-manuales',
  standalone: true,
  imports: [CommonModule, ButtonsComponent],
  templateUrl: './manuales.component.html',
  styleUrl: './manuales.component.css'
})
export class ManualesComponent implements OnInit{

  manuales: any[]=data.documentos[0].items;    
  clave:string
  data:documento[]
 

  //constructor(private manualService: LlamadasService) {}

  constructor(private http: LlamadasService) {}



   ngOnInit():void {    

    try {
      this.clave = localStorage.getItem("clave")
      console.log("la clave en rrhh es:", this.clave)
     } catch (error) {
       console.log(error.message)
     }
                
}
        
}

