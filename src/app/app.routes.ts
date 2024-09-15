import { Routes } from '@angular/router';
//import { RegisterComponent } from './register/register.component'; 
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: PaginaInicioComponent },
  //{ path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent }
];