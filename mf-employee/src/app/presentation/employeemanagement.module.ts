import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeManagementRoutingModule } from './employeemanagement-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { DataModule } from '../infrastructure/data/data.module';


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,
    EmployeeManagementRoutingModule,
    DataModule
  ]
})
export class EmployeeManagementModule { }
