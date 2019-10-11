import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  //private url = "/assets/data/employee.json";
  private url = "https://www.hatchways.io/api/assessment/students";
  constructor(private http:HttpClient) {}
  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.url);
  }
}