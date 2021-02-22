import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { RoleGuard } from './core/role/role.guard';
import { Role } from './core/user/role.model';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
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
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
    canLoad: [AuthGuard],
  }, 
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    canLoad: [RoleGuard],
    data: { roles: [Role.Manager] },
  },
  {
    path: 'announcements',
    loadChildren: () => import('./pages/announcements/announcements.module').then(m => m.AnnouncementsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/change-password/change-password.module').then(m => m.ChangePasswordModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
