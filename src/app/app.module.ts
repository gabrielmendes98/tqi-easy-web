import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { AluraAccessComponent } from './pages/alura-access/alura-access.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterActivityComponent } from './pages/register-activity/register-activity.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { TopNavigationComponent } from './shared/top-navigation/top-navigation.component';
import { LeftNavigationComponent } from './shared/left-navigation/left-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AluraAccessComponent,
    ProfileComponent,
    RegisterActivityComponent,
    TopNavigationComponent,
    LeftNavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
