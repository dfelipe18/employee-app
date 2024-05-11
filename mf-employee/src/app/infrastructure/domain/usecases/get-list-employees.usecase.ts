import { Observable } from "rxjs";
import { UseCase } from "../../base/usecase";
import { IListEmployee } from "../models/employe.model";
import { EmployeeRepositorie } from "../repositories/employee.repositorie";

export class GetListEmployeesUseCase implements UseCase<any, IListEmployee> {

  constructor(private repositori: EmployeeRepositorie) {}
  execute(params: any): Observable<IListEmployee> {
    return this.repositori.getListEmployees();
  }
}
