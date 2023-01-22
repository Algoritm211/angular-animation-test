import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SimpleAnimationComponent} from "./simple-animation/simple-animation.component";
import {StatesAnimationComponent} from "./states-animation/states-animation.component";

const routes: Routes = [
  { path: 'simple', component: SimpleAnimationComponent },
  { path: 'states', component: StatesAnimationComponent },
  { path: '', redirectTo: 'simple', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
