import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { InstruccionesComponent } from './components/instrucciones/instrucciones.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { Input, Output, EventEmitter} from '@angular/core'
import { CommonModule } from '@angular/common';  
import { FormsModule} from '@angular/forms'
import { UserDto } from './models/instruccionDTO';
import { HomeComponent } from "./components/home/home.component";
import { catchError } from 'rxjs';
import { SupervisoresComponent } from './components/supervisores/supervisores.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, ButtonsComponent, InstruccionesComponent, RegistrosComponent, CommonModule, FormsModule, HomeComponent, SupervisoresComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {

  title = 'sistemaCalidad';
  showButton:boolean
  user:UserDto
  message:string
  clave:string

  constructor(){
    this.showButton=false
    this.user = new UserDto('','')
    this.message=''   

    try {
    localStorage.removeItem("clave")
    } catch (error) {
      console.log(error.message)
    }

  }

  checkLogin(){



    if (this.user.password=="irco2023" || this.user.password=="Prevencion00" ) {

      this.showButton=!this.showButton 

      try {
        localStorage.setItem("clave", this.user.password)
      } catch (error) {
        console.log(error.message)
      }
      
      this.clave= localStorage.getItem("clave")
      console.log("la clave del local es:", this.clave)
      

    } else {

      this.message='Contraseña Incorrecta'

      
    }
       

  }



}
