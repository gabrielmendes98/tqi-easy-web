import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AluraAccessComponent } from './components/alura-access.component';

const routes: Routes = [
  {
    path: '',
    component: AluraAccessComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AluraAccessRoutingModule { }