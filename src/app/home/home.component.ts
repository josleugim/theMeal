import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {RandomMealComponent} from "../shared/random-meal/random-meal.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.dialog.open(RandomMealComponent)
  }
}
