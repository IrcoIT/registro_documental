
import { Component } from '@angular/core';
import { LlamadasService } from '../../services/llamadas.service';
import { documento } from '../../models/instruccionDTO';

import  data from '../../../assets/documentos.json'; //lee el json
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from "../buttons/buttons.component";

@Component({
  selector: 'app-comercial',
  standalone: true,
  imports: [CommonModule, ButtonsComponent],
  templateUrl: './comercial.component.html',
  styleUrl: './comercial.component.css'
})
export class ComercialComponent {

  manuales: any[]=data.documentos[3].items;    
  clave:string
  data:documento[]
 

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
