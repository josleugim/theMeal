import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {IngredientComponent} from "./ingredient/ingredient.component";
import {AuthGuardGuard} from "./guards/auth-guard.guard";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'dishes', loadChildren: () => import('./dishes/dishes.module').then(m => m.DishesModule)
  },
  {
    path: 'ingredients', component: IngredientComponent, canActivate: [AuthGuardGuard]
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
