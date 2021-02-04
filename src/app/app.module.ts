import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterActivityComponent } from './pages/register-activity/register-activity.component';
import { TopNavigationComponent } from './shared/top-navigation/top-navigation.component';
import { LeftNavigationComponent } from './shared/left-navigation/left-navigation.component';
import { IconModule } from './shared/icon/icon.module';
import { MaterialModule } from './shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/auth/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { AnnouncementComponent } from './pages/announcements/announcement/announcement.component';
import { SpinnerOverlayComponent } from './shared/spinner-overlay/spinner-overlay.component'
import { SpinnerOverlayInterceptor } from './shared/spinner-overlay/spinner-overlay.interceptor';
import { SuccessOverlayComponent } from './shared/spinner-overlay/success-overlay/success-overlay.component';
import { ErrorOverlayComponent } from './shared/spinner-overlay/error-overlay/error-overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterActivityComponent,
    TopNavigationComponent,
    LeftNavigationComponent,
    AnnouncementsComponent,
    AnnouncementComponent,
    SpinnerOverlayComponent,
    SuccessOverlayComponent,
    ErrorOverlayComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    IconModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerOverlayInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
