import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Employee} from '../interfaces/Employee';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Dates} from "../interfaces/Dates";



@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://localhost:8080/api/employee';
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url);
  }

  addEmployee(employee: Employee): Observable<Employee> {

      return this.http.post<Employee>(this.url, employee, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      });
  }

  getRandomDuty(dates: Dates): Observable<Dates> {
    return this.http.post<Dates>('http://localhost:8080/api/random', dates, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
