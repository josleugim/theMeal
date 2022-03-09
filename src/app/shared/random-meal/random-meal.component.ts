import { Component, OnInit } from '@angular/core';
import {MealsService} from "../../services/meals.service";

@Component({
  selector: 'app-random-meal',
  templateUrl: './random-meal.component.html',
  styleUrls: ['./random-meal.component.sass']
})
export class RandomMealComponent implements OnInit {
  randomMeal: any;

  constructor(
    private mealService: MealsService
  ) { }

  ngOnInit(): void {
    this.getRandomMeal();
  }

  getRandomMeal(): void {
    this.mealService.findRandom()
      .subscribe((response) => {
        this.randomMeal = response.meals.pop();
      })
  }

}
