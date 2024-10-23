import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { LlamadasService } from '../../services/llamadas.service';
import { documento } from '../../models/instruccionDTO';

import  data from '../../../assets/documentos.json'; //lee el json
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from "../buttons/buttons.component";

@Component({
  selector: 'app-supervisores',
  standalone: true,
  imports: [CommonModule, ButtonsComponent],
  templateUrl: './supervisores.component.html',
  styleUrl: './supervisores.component.css'
})
export class SupervisoresComponent {

  manuales: any[]=data.documentos[5].items;   
  clave:string   
  data:documento[]
 

  constructor(private http: LlamadasService) {}

  ngOnInit():void {    

    try {
      this.clave = localStorage.getItem("clave")
      console.log("la clave es:", this.clave)
     } catch (error) {
       console.log(error.message)
     }
                
}


}
