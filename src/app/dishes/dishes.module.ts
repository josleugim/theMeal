import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from "@ngrx/store";

import { DishesRoutingModule } from './dishes-routing.module';
import {DishesComponent} from "./dishes.component";
import { DetailsComponent } from './details/details.component';
import {dishesReducer} from "./state/dishes.reducer";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {YouTubePlayerModule} from "@angular/youtube-player";

@NgModule({
  declarations: [
    DishesComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DishesRoutingModule,
    StoreModule.forFeature('dishes', dishesReducer),
    MatCheckboxModule,
    MatButtonModule,
    YouTubePlayerModule
  ]
})
export class DishesModule { }
