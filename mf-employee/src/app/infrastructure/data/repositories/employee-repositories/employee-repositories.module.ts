import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRepositorie } from '../../../domain/repositories/employee.repositorie';
import { EmployeeService } from './employee.service';
import { GetListEmployeesUseCase } from '../../../domain/usecases/get-list-employees.usecase';
import { SetNewEmployeeUseCase } from '../../../domain/usecases/set-new-employee.usecase';

const getListEmployeesFactory = (repository: EmployeeRepositorie) =>
  new GetListEmployeesUseCase(repository);
export const getListEmployeesUseCaseProvider = {
  provide: GetListEmployeesUseCase,
  useFactory: getListEmployeesFactory,
  deps: [EmployeeRepositorie],
};

const setNewEmployeesFactory = (repository: EmployeeRepositorie) =>
  new SetNewEmployeeUseCase(repository);
export const setNewEmployeesUseCaseProvider = {
  provide: SetNewEmployeeUseCase,
  useFactory: setNewEmployeesFactory,
  deps: [EmployeeRepositorie],
};

@NgModule({
  declarations: [],
  providers: [
    getListEmployeesUseCaseProvider,
    setNewEmployeesUseCaseProvider,
    {
      provide: EmployeeRepositorie,
      useClass: EmployeeService,
    },
  ],
  imports: [CommonModule],
})
export class EmployeeRepositoriesModule {}
