import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AluraAccessComponent } from './pages/alura-access/alura-access.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterActivityComponent } from './pages/register-activity/register-activity.component';

let isManager = true;

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: isManager ? DashboardComponent : ProfileComponent,
    pathMatch: 'full'
  },
  {
    path: 'alura-access',
    component: AluraAccessComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'register-activity',
    component: RegisterActivityComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
