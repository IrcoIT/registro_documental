import { Component } from '@angular/core';
import { RegistrosComponent } from '../registros/registros.component';
import { InstruccionesComponent } from '../instrucciones/instrucciones.component';
import { ButtonsComponent } from '../buttons/buttons.component';
import { RouterLink } from '@angular/router';
import { Input, Output, EventEmitter} from '@angular/core'
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegistrosComponent, InstruccionesComponent, ButtonsComponent, RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {



  constructor(){

  }

}
