import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { documento } from '../../models/instruccionDTO';
import  data from '../../../assets/documentos.json';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {


  manuales: any[]=data.documentos[0].items;    
  clave:string
  data:documento[]



  ngOnInit():void {    

    try {
      this.clave = localStorage.getItem("clave")
      
     } catch (error) {
       console.log(error.message)
     }
                
}

}
