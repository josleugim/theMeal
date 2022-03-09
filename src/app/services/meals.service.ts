import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(`/meals`);
  }

  findRandom(): Observable<any> {
    return this.http.get(`/meals-random`);
  }

  findById(id: number = 52977): Observable<any> {
    return this.http.get(`/meals/${id}`);
  }
}
