import { Routes } from '@angular/router';
import { RegistrosComponent } from './components/registros/registros.component';
import { InstruccionesComponent } from './components/instrucciones/instrucciones.component';
import { HomeComponent } from './components/home/home.component';
import { ManualesComponent } from './components/manuales/manuales.component';
import { RegistrosITComponent } from './components/registros-it/registros-it.component';

export const routes: Routes = [

    {
        path:'',
        component: HomeComponent, 
    },

    {
        path:'registros',
        component: RegistrosComponent,
    },

    {
        path:'instrucciones',
        component: InstruccionesComponent
    },

    {
        path:'manuales',
        component: ManualesComponent
    },

    {
        path:'registros-it',
        component: RegistrosITComponent
    }




];
