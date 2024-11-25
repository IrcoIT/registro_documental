import { Routes } from '@angular/router';
import { RegistrosComponent } from './components/registros/registros.component';
import { InstruccionesComponent } from './components/instrucciones/instrucciones.component';
import { HomeComponent } from './components/home/home.component';
import { ManualesComponent } from './components/manuales/manuales.component';
import { RegistrosITComponent } from './components/registros-it/registros-it.component';
import { RrhhComponent } from './components/rrhh/rrhh.component';
import { ComercialComponent } from './components/comercial/comercial.component';
import { PrevencionComponent } from './components/prevencion/prevencion.component';
import { SupervisoresComponent } from './components/supervisores/supervisores.component';
import { ComprasComponent } from './components/compras/compras.component';
import { FinancieroComponent } from './components/financiero/financiero.component';


export const routes: Routes = [       


    {
        path:'home',
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
    },

    {   path:'rrhh',
        component: RrhhComponent
    },

    {   path:'comercial',
        component: ComercialComponent
    },

    {
        path:'prevencion',
        component:PrevencionComponent
    },

    {
        path:'supervisores',
        component:SupervisoresComponent
    },

    {
        path:'compras',
        component:ComprasComponent
    },

    {
        path:'financiero',
        component:FinancieroComponent
    }

];
