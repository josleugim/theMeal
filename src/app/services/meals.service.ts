import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(`/api/json/v1/1/search.php?s=`);
  }

  findRandom(): Observable<any> {
    return this.http.get(`/api/json/v1/1/random.php`);
  }

  findById(id: number = 52977): Observable<any> {
    return this.http.get(`/api/json/v1/1/lookup.php?i=${id}`);
  }
}
