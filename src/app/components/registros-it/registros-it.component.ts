import { Component } from '@angular/core';
import { LlamadasService } from '../../services/llamadas.service';
import { documento } from '../../models/instruccionDTO';

import  data from '../../../assets/documentos.json';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-registros-it',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registros-it.component.html',
  styleUrl: './registros-it.component.css'
})
export class RegistrosITComponent {

  manuales: any[]=data.documentos[1].items;    
  
  data:documento[]
 

  constructor(private http: LlamadasService) {}

  ngOnInit():void {    
    
   console.log(this.manuales)

        
}

}
