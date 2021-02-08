import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

import { SpinnerOverlayInterceptor } from './components/spinner-overlay/spinner-overlay.interceptor';
import { LeftNavigationComponent } from './components/left-navigation/left-navigation.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { SpinnerOverlayModule } from './components/spinner-overlay/spinner-overlay.module';
import { IconModule } from './components/icon/icon.module';
import { ShowIfManagerModule } from './directives/show-if-manager/show-if-manager.module';

const components = [LeftNavigationComponent, TopNavigationComponent];

const materialModules = [
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatButtonModule,
];

@NgModule({
  imports: [CommonModule, RouterModule, IconModule, ShowIfManagerModule,...materialModules],
  declarations: [...components],
  exports: [...components, SpinnerOverlayModule, IconModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerOverlayInterceptor,
      multi: true,
    },
  ],
})
export class SharedModule {}
