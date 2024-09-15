import { Routes } from '@angular/router';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: PaginaInicioComponent },// Ruta para el componente principal de la página de inicio
    { path: 'dashboard', component: DashboardComponent }
  ];