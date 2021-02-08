import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterActivityComponent } from './pages/register-activity/register-activity.component';
import { TopNavigationComponent } from './shared/components/top-navigation/top-navigation.component';
import { LeftNavigationComponent } from './shared/components/left-navigation/left-navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/auth/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { AnnouncementComponent } from './pages/announcements/announcement/announcement.component';
import { SharedModule } from './shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RegisterActivityModule } from './pages/register-activity/register-activity.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AnnouncementsComponent,
    AnnouncementComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    RegisterActivityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
