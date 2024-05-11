import { Component, OnInit } from '@angular/core';
import { GetListEmployeesUseCase } from '../../infrastructure/domain/usecases/get-list-employees.usecase';
import { IListEmployeeData } from '../../infrastructure/domain/models/employe.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeesList!: IListEmployeeData[];

  constructor(private getListEmployeesUC: GetListEmployeesUseCase) {}

  ngOnInit(): void {
    this.getListEmployeesUC.execute('').subscribe(employees => {
      console.log(employees)
      debugger
      this.employeesList = employees.data;
    })
  }

}
