import { Component, OnInit } from '@angular/core';
import {MealsService} from "../services/meals.service";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.sass']
})
export class DishesComponent implements OnInit {
  dishesList: Array<any> = [];
  displayIds: boolean = false;

  constructor(
    private mealService: MealsService,
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.findAllDishes();

    this.store.select('dishes').subscribe(
      dishes => {
        if (dishes) {
          this.displayIds = dishes.viewMore;
        }
      }
    )
  }

  findAllDishes(): void {
    this.mealService.findAll()
      .subscribe((response) => {
        this.dishesList = response.meals;
      })
  }

  toggleIds(): void {
    this.displayIds = !this.displayIds;
    this.store.dispatch({
      type: '[Dish] View more Dishes'
    })
  }
}
