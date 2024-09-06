import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { documento } from '../../models/instruccionDTO';
import  data from '../../../assets/documentos.json';
import { CommonModule } from '@angular/common';

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



  ngOnInit():void {    

    try {
      this.clave = localStorage.getItem("clave")
      console.log(this.manuales)
      
     } catch (error) {
       console.log(error.message)
     }
                
}


}
