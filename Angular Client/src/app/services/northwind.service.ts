import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategoriesType } from '../models/northwind/categories-type';
import { EmployeesType } from '../models/northwind/employees-type';
import { Northwind } from '../static-data/northwind';

@Injectable({
  providedIn: 'root'
})
export class NorthwindService {
  public getCategories(): Observable<CategoriesType[]> {
    return of(Northwind['CategoriesType']);
  }

  public getEmployees(): Observable<EmployeesType[]> {
    return of(Northwind['EmployeesType']);
  }
}
