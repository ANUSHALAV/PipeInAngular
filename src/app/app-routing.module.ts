import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlluserComponent } from './mycomponent/alluser/alluser.component';

const routes: Routes = [
  { path: "", component: AlluserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
