import { Component, OnInit } from '@angular/core';
import {MealsService} from "../services/meals.service";

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.sass']
})
export class DishesComponent implements OnInit {
  dishesList: Array<any> = [];

  constructor(
    private mealService: MealsService
  ) { }

  ngOnInit(): void {
    this.findAllDishes();
  }

  findAllDishes(): void {
    this.mealService.findAll()
      .subscribe((response) => {
        this.dishesList = response.meals;
      })
  }

}
