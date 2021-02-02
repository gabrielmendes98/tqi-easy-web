import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { ProfileComponent } from "./profile.component";
import { ProfileResolver } from "./profile.resolver";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ProfileComponent },
      { path: 'edit', component: EditProfileComponent, resolve: { profile: ProfileResolver } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }