import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmployeeRepositorie } from '../../../domain/repositories/employee.repositorie';
import { Observable } from 'rxjs';
import {
  ICreateEmployee,
  IListEmployee,
} from '../../../domain/models/employe.model';
import { environment } from './../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService extends EmployeeRepositorie {
  constructor(private http: HttpClient) {
    super();
  }

  getListEmployees(): Observable<IListEmployee> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<IListEmployee>(
      `${environment.REQUEST_EMPLOYEES_URL}/employees`,
      {
        headers,
      }
    );
  }

  setNewEmployee(employee: ICreateEmployee): void {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    this.http.post<ICreateEmployee>(
      `${environment.REQUEST_EMPLOYEES_URL}/create`,
      employee,
      {
        headers,
      }
    );
  }
}
