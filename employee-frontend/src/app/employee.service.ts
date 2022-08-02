import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  getEmployees() {
    throw new Error('Method not implemented.');
  }
  private baseUrl: string = 'http://localhost:1210/api/v1/employees';

  constructor(private http: HttpClient) { }

  getEmployeeById(employeeId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${employeeId}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateEmployee(employeeId: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${employeeId}`, value);
  }

  deleteEmployee(employeeId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${employeeId}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}