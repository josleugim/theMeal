import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DishesComponent} from "./dishes.component";
import {DetailsComponent} from "./details/details.component";

const routes: Routes = [
  {
    path: '', component: DishesComponent
  },
  {
    path: ':id', component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishesRoutingModule { }
