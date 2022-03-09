import { Component, OnInit } from '@angular/core';
import {MealsService} from "../../services/meals.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  meal: any;
  id: any;
  mealTags: any;
  youtubeId: string = '';

  constructor(
    private mealService: MealsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getMealById(this.id);
  }

  getMealById(id: number): void {
    this.mealService.findById(id)
      .subscribe((response) => {
        this.meal = response.pop();
        if (this.meal.strTags) {
          this.mealTags = this.meal.strTags.split(',');
        }

        if (this.meal.strYoutube) {
          this.youtubeId = this.meal.strYoutube.split('v=').pop();
        }
      })
  }
}
