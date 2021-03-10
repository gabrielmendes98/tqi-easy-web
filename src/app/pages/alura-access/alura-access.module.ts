import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AluraAccessRoutingModule } from './alura-access-routing.module';
import { UpdateStatusComponent } from './components/update-status/update-status.component';
import { AccessTableComponent } from './components/access-table/access-table.component';
import { AluraAccessComponent } from './components/alura-access.component';

const materialModules = [
  MatButtonModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDialogModule,
  MatTableModule,
];

@NgModule({
  declarations: [AluraAccessComponent, UpdateStatusComponent, AccessTableComponent],
  exports: [AluraAccessComponent],
  imports: [
    CommonModule,
    FormsModule,
    AluraAccessRoutingModule,
    ReactiveFormsModule,
    ...materialModules
  ],
})
export class AluraAccessModule {}
