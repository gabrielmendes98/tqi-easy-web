import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { RoleGuard } from './core/role/role.guard';
import { Role } from './core/user/role.model';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterActivityComponent } from './pages/register-activity/register-activity.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'register-activity'
  },
  {
    path: 'register-activity',
    component: RegisterActivityComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'alura-access',
    loadChildren: () => import('./pages/alura-access/alura-access.module').then(m => m.AluraAccessModule),
    canLoad: [RoleGuard],
    data: { roles: [Role.Manager] }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canLoad: [AuthGuard]
  }, 
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    canLoad: [RoleGuard],
    data: { roles: [Role.Manager] }
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
