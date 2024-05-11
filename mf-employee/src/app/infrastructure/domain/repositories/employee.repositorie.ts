import { Observable } from "rxjs";
import { ICreateEmployee, IListEmployee } from "../models/employe.model";

export abstract class EmployeeRepositorie {
  abstract getListEmployees(): Observable<IListEmployee>;
  abstract setNewEmployee(employee: ICreateEmployee): void;
}
