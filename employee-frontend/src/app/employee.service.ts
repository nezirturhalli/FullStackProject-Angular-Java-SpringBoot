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

  constructor(private http: HttpClient) {}

  getEmployeesList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Token',
      }),
    };

    return this.http.post<Employee>(this.baseUrl, employee, httpOptions).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to

      switch (error.status) {
        case 200:
          console.log('OK');
          break;
        case 404:
          console.log('NOT_FOUND');
          break;
        case 200:
          console.log('ACCESS_DENIED');
          break;
        case 500:
          console.log('INTERNAL_SERVER_ERROR');
          break;
        default:
          console.log('Something went wrong');
      }
    }
    return throwError(error.message);
  }
}
