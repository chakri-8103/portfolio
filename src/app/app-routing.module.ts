import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { DashboardComponent } from './admin/screens/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'portfolio',
    pathMatch: 'full'
  },
  {
    path: 'portfolio',
    component: DashboardComponent
  },
  {
    path: 'admin/portfolio',
    redirectTo: 'portfolio',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    redirectTo: 'portfolio',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'portfolio'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AdminModule]
