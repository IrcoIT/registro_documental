import { Component } from '@angular/core';
import { RegistrosComponent } from '../registros/registros.component';
import { InstruccionesComponent } from '../instrucciones/instrucciones.component';
import { ButtonsComponent } from '../buttons/buttons.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegistrosComponent, InstruccionesComponent, ButtonsComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
