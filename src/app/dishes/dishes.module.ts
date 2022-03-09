import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from "@ngrx/store";

import { DishesRoutingModule } from './dishes-routing.module';
import {DishesComponent} from "./dishes.component";
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    DishesComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DishesRoutingModule,
    StoreModule.forFeature('dishes', {})
  ]
})
export class DishesModule { }
