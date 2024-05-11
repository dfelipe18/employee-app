import { UseCaseWhitoutObservable } from '../../base/usecase-whitout-observable';
import { ICreateEmployee } from '../models/employe.model';
import { EmployeeRepositorie } from '../repositories/employee.repositorie';

export class SetNewEmployeeUseCase
  implements UseCaseWhitoutObservable<ICreateEmployee, void>
{
  constructor(private repositori: EmployeeRepositorie) {}
  execute(params: ICreateEmployee): void {
    this.repositori.setNewEmployee(params);
  }
}
