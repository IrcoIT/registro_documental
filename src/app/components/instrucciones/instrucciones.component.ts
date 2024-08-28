import { Component } from '@angular/core';

import { documento } from '../../models/instruccionDTO';
import { ButtonsComponent } from "../buttons/buttons.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instrucciones',
  standalone: true,
  imports: [ButtonsComponent,CommonModule],
  templateUrl: './instrucciones.component.html',
  styleUrl: './instrucciones.component.css'
})
export class InstruccionesComponent {

  clave:string

  constructor(){}


  ngOnInit():void {    

    try {
      this.clave = localStorage.getItem("clave")
      console.log("la clave en rrhh es:", this.clave)
     } catch (error) {
       console.log(error.message)
     }
                
}

}
