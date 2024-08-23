import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { InstruccionesComponent } from './components/instrucciones/instrucciones.component';
import { RegistrosComponent } from './components/registros/registros.component';


import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, ButtonsComponent, InstruccionesComponent, RegistrosComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sistemaCalidad';


}
