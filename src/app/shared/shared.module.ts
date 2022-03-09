import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from "@angular/material/dialog";
import { RandomMealComponent } from './random-meal/random-meal.component';
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    RandomMealComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule
  ]
})
export class SharedModule { }
